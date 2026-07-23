# JOINS

# LEFT JOIN in SQL

## Players Table (p)

| player_id | player_name |
|-----------|-------------|
| 1 |         Aayush |
| 2 |         Rahul |
| 3 |         Priya |
| 4 |         Neha |

## Results Table (r)

| player_id | score |
|-----------|-------|
| 1 |          95 |
| 2 |          88 |
| 5 |          76 |

## LEFT JOIN Query

```sql
SELECT
    p.player_id,
    p.player_name,
    r.score
FROM Players AS p
LEFT JOIN Results AS r
ON p.player_id = r.player_id;
```

## Output

| player_id | player_name | score |
|-----------|-------------|-------|
| 1 |         Aayush |        95 |
| 2 |         Rahul |         88 |
| 3 |         Priya |       NULL |
| 4 |         Neha |        NULL |

## Explanation

- `LEFT JOIN` returns **all rows from the left table (`Players`)**.
- If a matching row exists in the right table (`Results`), the corresponding `score` is displayed.
- If no matching row exists, the columns from the right table contain **NULL**.
- The row `(5, 76)` from the `Results` table is **not included** because there is no matching `player_id = 5` in the `Players` table.