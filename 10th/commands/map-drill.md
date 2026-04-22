---
name: map-drill
description: Geography map work quiz — tests ability to locate items on India outline map. 5 guaranteed marks if mastered. Chains to examiner agent + geography-maps skill.
---

# /map-drill Command

## Syntax
```
/map-drill [category] [count]
```

## Parameters

| Parameter | Required | Options | Default |
|-----------|----------|---------|---------|
| category | No | all, history, minerals, dams, ports, airports, steel, nuclear, software | all |
| count | No | 5-20 | 10 |

## What It Does

1. Loads `skills/geography-maps/SKILL.md`
2. Randomly selects `count` map items from the specified category
3. Quizzes: "On an India map, locate and mark: [item]"
4. After student responds, verifies location accuracy
5. Tracks accuracy percentage over time

## Drill Modes

```
MODE 1: IDENTIFY
  "Where is Bhakra Nangal Dam located?"
  Student answers: "On River Sutlej, Punjab-Himachal border"
  → Evaluates: State ✅, River ✅, Border location ✅

MODE 2: CLASSIFY
  "Name any 3 nuclear power plants in South India"
  Student answers: "Kaiga, Kalpakkam, Tarapur"
  → Evaluates: Kaiga ✅ (Karnataka), Kalpakkam ✅ (TN), Tarapur ❌ (Maharashtra = West, not South)

MODE 3: LOCATE
  Given a blank India map description, "Mark the following 5 items"
  → Tests: Can you place them in the correct approximate location?
```

## Examples

```
/map-drill ports 5
→ Quiz 5 random sea ports from the 11 major ports list

/map-drill all 15
→ 15 random items from ALL categories (mixed — hardest mode)

/map-drill history 7
→ 7 locations from Indian National Movement map items

/map-drill nuclear 6
→ All 6 nuclear power plant locations
```

## Chains To
**examiner** agent → generates map quiz questions
**geography-maps** skill → location data
