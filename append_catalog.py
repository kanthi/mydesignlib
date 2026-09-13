import json

catalog_path = '/home/king/Workspace/Repos/mydesignlib/data/catalog.json'

with open(catalog_path, 'r') as f:
    data = json.load(f)

new_entry = {
  "id": "solveiq-agy",
  "name": "Solveiq",
  "description": "Dark AI support ops SaaS — amber/charcoal, HTML inbox mock hero, how-it-works steps, feature pair, metrics band, pricing, testimonials.",
  "tags": ["saas", "ai", "support", "customer-success", "dark"],
  "category": "SaaS",
  "thumbnail": "library/websites/solveiq-agy/preview.jpg",
  "path": "library/websites/solveiq-agy/",
  "featured": True,
  "date": "2026-08-12",
  "type": "website",
  "projectId": "solveiq-agy",
  "related": []
}

data['items'].append(new_entry)

with open(catalog_path, 'w') as f:
    json.dump(data, f, indent=2)

print("Appended to catalog.")
