#!/usr/bin/env python3
import urllib.request
import re
import json

req = urllib.request.Request('https://www.getlayers.ai/layer/artefakt', headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8')

# Find position of "items":
idx = html.find('items')
# Let's find every occurrence of {"id":"..." or {\\"id\\":\\"...\\"}
# A robust regex:
pattern = re.compile(r'\{[\\"]+id[\\"]+:[\\"]+([^\\"]+)[\\"]+,[\\"]+title[\\"]+:[\\"]+([^\\"]+)[\\"]+,[\\"]+category[\\"]+:[\\"]+([^\\"]+)[\\"]+,[\\"]+tags[\\"]+:\[(.*?)\],[\\"]+stack[\\"]+:\[(.*?)\],[\\"]+tier[\\"]+:[\\"]+([^\\"]+)[\\"]+,[\\"]+description[\\"]+:[\\"]+(.*?)[\\"]+,[\\"]+image[\\"]+:[\\"]+([^\\"]+)[\\"]+')

items = []
for m in pattern.finditer(html):
    id_, title, category, tags_raw, stack_raw, tier, desc, image = m.groups()
    tags = [re.sub(r'[^a-zA-Z0-9\s\-]', '', t).strip() for t in tags_raw.split(',') if t.strip()]
    stack = [re.sub(r'[^a-zA-Z0-9\s\-]', '', s).strip() for s in stack_raw.split(',') if s.strip()]
    items.append({
        'id': id_,
        'title': title,
        'category': category,
        'tags': tags,
        'stack': stack,
        'tier': tier,
        'description': desc.encode().decode('unicode_escape', errors='ignore'),
        'image': image
    })

unique_items = {}
for it in items:
    if it['id'] not in unique_items:
        unique_items[it['id']] = it

all_templates = list(unique_items.values())
print(f'Total unique templates extracted: {len(all_templates)}')

with open('data/getlayers_corpus.json', 'w') as f:
    json.dump(all_templates, f, indent=2)

for it in all_templates:
    print(f"- {it['id']}: {it['title']} ({it['tier']}) | tags: {it['tags']}")
