import json
from pathlib import Path
from urllib.parse import urlparse

root = Path("src/data/contentLibrary.ts")
data = json.loads(Path("tmp/content-library.json").read_text(encoding="utf-8"))
category_values = [
    "Competitive Brief",
    "On-demand Webinar",
    "Report",
    "Tutorial Video",
    "White Paper",
]
header = """export type ContentLibraryCategory =\n  | 'Competitive Brief'\n  | 'On-demand Webinar'\n  | 'Report'\n  | 'Tutorial Video'\n  | 'White Paper';\n\nexport interface ContentLibraryResource {\n  category: ContentLibraryCategory;\n  title: string;\n  description: string;\n  cta: string;\n  href: string;\n  image: string;\n}\n\nconst asset = (filename: string) =>\n  new URL(`../assets/resources/content-library/${filename}`, import.meta.url).href;\n\nexport const contentLibraryCategories = [\n  { label: 'View all', value: 'all' },\n  { label: 'Competitive Brief', value: 'Competitive Brief' },\n  { label: 'On-demand Webinar', value: 'On-demand Webinar' },\n  { label: 'Report', value: 'Report' },\n  { label: 'Tutorial Video', value: 'Tutorial Video' },\n  { label: 'White Paper', value: 'White Paper' },\n] as const;\n\nexport const contentLibraryResources: ContentLibraryResource[] = [\n"""

def normalize(value: str) -> str:
    replacements = {
        "–": "-",
        "—": "-",
        "’": "'",
        "“": '"',
        "”": '"',
        "\u2028": " ",
        "\u00a0": " ",
    }
    for original, replacement in replacements.items():
        value = value.replace(original, replacement)
    return " ".join(value.split())


def qp(value: str) -> str:
    return json.dumps(normalize(value), ensure_ascii=False)

entries = []
for item in data:
    parsed = urlparse(item["image"])
    filename = Path(parsed.path).name
    entry = f"  {{\n    category: {qp(item['category'])},\n    title: {qp(item['title'])},\n    description: {qp(item['description'])},\n    cta: {qp(item['cta'])},\n    href: {qp(item['href'])},\n    image: asset({qp(filename)}),\n  }}"
    entries.append(entry)

content = header + ",\n".join(entries) + "\n];\n"
root.write_text(content, encoding="utf-8")
print(f"Wrote {len(entries)} resources to {root}")
