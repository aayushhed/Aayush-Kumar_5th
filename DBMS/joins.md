# SQL Joins

A comprehensive guide to understanding different types of SQL Joins: `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, and `FULL OUTER JOIN`.

---

## 1. LEFT JOIN (LEFT OUTER JOIN)

A **LEFT JOIN** returns:
- **All rows from the left table**.
- Matching rows from the right table.
- If no match exists, the columns from the right table contain `NULL`.

### Example

#### Players Table (`p`)
| player_id | player_name |
| :--- | :--- |
| 1 | Aayush |
| 2 | Rahul |
| 3 | Priya |
| 4 | Neha |

#### Results Table (`r`)
| player_id | score |
| :--- | :--- |
| 1 | 95 |
| 2 | 88 |
| 5 | 76 |

### Query
```sql
SELECT
    p.player_id,
    p.player_name,
    r.score
FROM Players AS p
LEFT JOIN Results AS r
ON p.player_id = r.player_id;
```

### Output
| player_id | player_name | score |
| :--- | :--- | :--- |
| 1 | Aayush | 95 |
| 2 | Rahul | 88 |
| 3 | Priya | NULL |
| 4 | Neha | NULL |

### Explanation
- `LEFT JOIN` returns **all rows from the left table (`Players`)**.
- If a matching row exists in the right table (`Results`), the corresponding `score` is displayed.
- If no matching row exists, the columns from the right table contain **NULL** (e.g., for `Priya` and `Neha`).
- The row `(5, 76)` from the `Results` table is **not included** because there is no matching `player_id = 5` in the `Players` table.

---

## 2. RIGHT JOIN (RIGHT OUTER JOIN)

A **RIGHT JOIN** returns:
- **All rows from the right table**.
- Matching rows from the left table.
- If no match exists, the columns from the left table contain `NULL`.

### Syntax
```sql
SELECT *
FROM Table1
RIGHT JOIN Table2
ON Table1.column = Table2.column;
```

### Example

#### Employee Table (`e`)
| emp_id | name | dept_id |
| :--- | :--- | :--- |
| 1 | Aayush | 101 |
| 2 | Rahul | 102 |
| 3 | Priya | 103 |

#### Department Table (`d`)
| dept_id | department |
| :--- | :--- |
| 101 | HR |
| 102 | IT |
| 104 | Finance |

### Query
```sql
SELECT e.emp_id, e.name, d.department
FROM Employee e
RIGHT JOIN Department d
ON e.dept_id = d.dept_id;
```

### Output
| emp_id | name | department |
| :--- | :--- | :--- |
| 1 | Aayush | HR |
| 2 | Rahul | IT |
| NULL | NULL | Finance |

### Explanation
- **HR (101)** → Matching employee found (`Aayush`).
- **IT (102)** → Matching employee found (`Rahul`).
- **Finance (104)** → No matching employee, so employee columns are `NULL`.

---

## 3. INNER JOIN

An **INNER JOIN** returns:
- **Only the rows that have matching values** in both tables.
- Rows without a match in either table are completely excluded.

### Syntax
```sql
SELECT *
FROM Table1
INNER JOIN Table2
ON Table1.column = Table2.column;
```

### Example (using same tables as above)

### Query
```sql
SELECT e.emp_id, e.name, d.department
FROM Employee e
INNER JOIN Department d
ON e.dept_id = d.dept_id;
```

### Output
| emp_id | name | department |
| :--- | :--- | :--- |
| 1 | Aayush | HR |
| 2 | Rahul | IT |

### Explanation
- Employee with **dept_id = 101** matches **HR**.
- Employee with **dept_id = 102** matches **IT**.
- Employee with **dept_id = 103** (`Priya`) has no matching department, so she is not returned.
- Department **Finance (104)** has no matching employee, so it is not returned.

---

## 4. FULL OUTER JOIN

A **FULL OUTER JOIN** returns:
- **All rows from both tables**, combined where matches are found.
- If there is no match, the missing side contains `NULL`.

### Syntax
```sql
SELECT *
FROM Table1
FULL OUTER JOIN Table2
ON Table1.column = Table2.column;
```

### Example (using same tables as above)

### Query
```sql
SELECT e.emp_id, e.name, d.department
FROM Employee e
FULL OUTER JOIN Department d
ON e.dept_id = d.dept_id;
```

### Output
| emp_id | name | department |
| :--- | :--- | :--- |
| 1 | Aayush | HR |
| 2 | Rahul | IT |
| 3 | Priya | NULL |
| NULL | NULL | Finance |

### Explanation
- Employee with **dept_id = 101** matches **HR**.
- Employee with **dept_id = 102** matches **IT**.
- Employee **Priya (103)** has no matching department, so the department column is `NULL`.
- Department **Finance (104)** has no matching employee, so employee columns are `NULL`.

---

## 5. Summary and Comparison

### Comparison of Joins

| JOIN Type | Returns |
| :--- | :--- |
| **INNER JOIN** | Only matching rows from both tables. |
| **LEFT JOIN** | All rows from the left table, and matching rows from the right. |
| **RIGHT JOIN** | All rows from the right table, and matching rows from the left. |
| **FULL OUTER JOIN** | All rows from both tables, matched where possible. |

### Memory Trick
- **INNER JOIN** $\rightarrow$ Only common intersection.
- **LEFT JOIN** $\rightarrow$ Keep the entire Left table.
- **RIGHT JOIN** $\rightarrow$ Keep the entire Right table.
- **FULL OUTER JOIN** $\rightarrow$ Keep **everything** from both sides.