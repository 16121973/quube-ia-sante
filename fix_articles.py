with open('src/index.tsx', 'r') as f:
    content = f.read()

# Articles patterns in order
articles_order = [
    ("Transformation", 1),
    ("ROI & Productivité", 2),
    ("Pilotage & Gouvernance", 3),
    ("Architecture & Tech", 4),
    ("Conformité & Sécurité", 5),
    ("ROI & Pilotage", 6),
    ("Gouvernance", 7),  # This comes after "Pilotage & Gouvernance"
    ("Bonnes Pratiques", 8),
    ("Gouvernance", 9),  # Another Gouvernance
    ("Formation", 10),
    ("Éthique & Inclusion", 11),
    ("Éthique & RH", 12),
    ("Prospective", 13),
]

# Split by article blocks
lines = content.split('\n')
result = []
article_num = 1

for i, line in enumerate(lines):
    if 'href="#" onclick="event.preventDefault(); openArticle(2);' in line:
        line = line.replace('openArticle(2)', f'openArticle({article_num})')
        article_num += 1
    result.append(line)

with open('src/index.tsx', 'w') as f:
    f.write('\n'.join(result))

print(f"Fixed {article_num - 1} articles")
