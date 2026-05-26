import re

# All confirmed bugs from the full audit scan
# Format: (question_id, current_wrong_correct, correct_correct_index)
fixes = {
    r"src\data\questions\da-121.ts": [
        ("d121_010", 3, 2),  # Base saturation >80% → highly fertile soil
        ("d121_015", 0, 2),  # Khaira disease → zinc deficiency
        ("d121_021", 0, 2),  # Arnon & Stout criteria of essentiality
        ("d121_024", 3, 1),  # N deficiency in grasses → inverted V shape
        ("d121_040", 3, 2),  # Ca deficiency in maize → no unfolding new leaves
    ],
    r"src\data\questions\da-122.ts": [
        ("d122_029", 0, 2),  # Urea not recommended → excessive water OR dry soils
        ("d122_034", 3, 2),  # Urea N% per FCO → 44% minimum (not 48%)
        ("d122_035", 0, 1),  # INM definition → organic+inorganic+biological
        ("d122_040", 3, 2),  # Deep placement → place ammoniacal N in reduction zone
        ("d122_041", 0, 1),  # Chemical vs organic → supply only one or few nutrients
        ("d122_043", 1, 2),  # Ammonium chloride → chlorine forms soluble CaCl2
        ("d122_044", 3, 1),  # CAN storage → highly hygroscopic
        ("d122_045", 0, 2),  # Calcium cyanamide N% → 21% (not 46%)
        ("d122_048", 3, 2),  # Green manure incorporation → 50% flowering stage
        ("d122_049", 0, 1),  # Atmospheric N% → 78% (not 21%)
        ("d122_065", 0, 1),  # Ammonium sulphate + basic slag → acidic+alkaline reaction
        ("d122_068", 3, 1),  # Monocropping nutrient depletion → same depth mined
        ("d122_069", 0, 1),  # Earthworm temperature → 18-35°C (not 5-15°C)
        ("d122_078", 3, 1),  # Non-edible oil cakes → non-palatable/poisonous to animals
    ],
    r"src\data\questions\da-151.ts": [
        ("d151_004", 3, 2),  # Diesel engine compression ratio → 14:1 to 20:1
        ("d151_010", 2, 3),  # Hydraulic system law → Pascal's Law
        ("d151_013", 1, 2),  # Mould board for stubble → abrupt curvature
        ("d151_014", 3, 1),  # Disc plough disc angle → 42 to 45 degrees
        ("d151_015", 0, 3),  # Front tyre pressure → 2 kg/sq cm
        ("d151_016", 2, 3),  # Disc plough tilt angle → 15 to 25 degrees
        ("d151_022", 2, 1),  # Purpose of puddling → reduce leaching, kill weeds
        ("d151_023", 1, 2),  # Function of flywheel → stores/releases energy
        ("d151_024", 3, 2),  # Alpod thresher use → wheat/barley/gram threshing
        ("d151_025", 0, 1),  # Small tractor HP range → 15 to 25 hp
        ("d151_026", 2, 3),  # Cooling method with thermostat → forced circulation
        ("d151_028", 3, 1),  # Diesel for 20 hp hours → 4.5 litres
    ],
    r"src\data\questions\da-171.ts": [
        ("d171_004", 3, 2),  # Seed dormancy breaking → scarification
        ("d171_024", 3, 2),  # Nursery bed size → 1m × 10m (10 sq m)
        ("d171_025", 0, 2),  # Pricking out → transfer seedlings to wider spacing
    ],
    r"src\data\questions\da-201.ts": [
        ("d201_021", 0, 3),  # Wilt disease resistance in tomato → Pusa Ruby
    ],
    r"src\data\questions\da-252.ts": [
        ("d252_001", 0, 1),
        ("d252_002", 2, 1),
        ("d252_004", 3, 1),
        ("d252_006", 2, 1),
        ("d252_008", 3, 2),
        ("d252_009", 0, 2),
        ("d252_012", 2, 0),
        ("d252_015", 0, 1),
        ("d252_016", 2, 1),
        ("d252_017", 1, 2),
        ("d252_018", 3, 1),
        ("d252_020", 0, 2),
        ("d252_025", 0, 2),
        ("d252_027", 1, 2),
        ("d252_028", 3, 2),
        ("d252_029", 0, 1),
        ("d252_030", 2, 1),
        ("d252_033", 0, 3),
        ("d252_035", 0, 1),
        ("d252_038", 3, 1),
        ("d252_040", 0, 1),
        ("d252_044", 3, 2),
        ("d252_045", 0, 3),
        ("d252_046", 2, 1),
        ("d252_049", 0, 1),
        ("d252_052", 3, 2),
        ("d252_053", 0, 2),
        ("d252_054", 3, 1),
        ("d252_056", 2, 0),
        ("d252_057", 1, 2),
        ("d252_058", 3, 1),
        ("d252_064", 3, 1),
        ("d252_065", 0, 3),
        ("d252_066", 2, 3),
        ("d252_067", 1, 2),
        ("d252_068", 3, 1),
        ("d252_071", 0, 2),
        ("d252_075", 0, 2),
        ("d252_078", 3, 1),
        ("d252_079", 2, 3),
        ("d252_080", 3, 2),
        ("d252_098", 3, 2),
    ],
}

total_all = 0
for filepath, changes in fixes.items():
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    file_fixed = 0
    for qid, old_correct, new_correct in changes:
        # Match the question id block and update the correct value
        pattern = rf'(id:\s*"{re.escape(qid)}".*?correct:\s*){old_correct}(,)'
        replacement = rf'\g<1>{new_correct}\2'
        new_content, n = re.subn(pattern, replacement, content, flags=re.DOTALL)
        if n > 0:
            content = new_content
            file_fixed += 1
            print(f"  OK Fixed {qid}: correct {old_correct} -> {new_correct}")
        else:
            print(f"  WARNING: Could not match {qid} with correct:{old_correct}")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"\n{filepath}: {file_fixed}/{len(changes)} fixes applied\n")
    total_all += file_fixed

print(f"Total fixes applied: {total_all}")
