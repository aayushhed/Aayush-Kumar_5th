# SQL Group By and Aggregations

Examples of SQL aggregation functions (`SUM()`, `MIN()`, `MAX()`, `AVG()`, `COUNT()`) combined with the `GROUP BY` clause.

---

## 1. Schema and Sample Data Setup

```sql
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(100) NOT NULL,
    emp_salary DECIMAL(10, 2) NOT NULL,
    emp_city VARCHAR(100) NOT NULL
);

INSERT INTO employees (emp_id, emp_name, emp_salary, emp_city) 
VALUES
(101, 'Amit Sharma', 85000.00, 'Mumbai'),
(102, 'Priya Patel', 95000.00, 'Mumbai'),
(103, 'Rahul Verma', 60000.00, 'Delhi'),
(104, 'Ananya Iyer', 110000.00, 'Bangalore'),
(105, 'Vikram Singh', 55000.00, 'Delhi'),
(106, 'Sneha Reddy', 105000.00, 'Bangalore'),
(107, 'Rohan Das', 72000.00, 'Kolkata');
```

---

## 2. Basic Grouping and Counting

### Count the Number of Employees in Each City

#### Option A: Count all records (`COUNT(*)`)
```sql
SELECT emp_city, COUNT(*) AS emp_count
FROM employees
GROUP BY emp_city;
```

#### Option B: Count matching IDs (`COUNT(emp_id)`)
```sql
SELECT emp_city, COUNT(emp_id) AS emp_count
FROM employees
GROUP BY emp_city;
```

### Find the Average Salary in Each City
Cast to `NUMERIC(20, 2)` for clean decimal precision formatting.

```sql
SELECT emp_city, AVG(emp_salary)::NUMERIC(20, 2) AS avg_sal
FROM employees
GROUP BY emp_city;
```

---

## 3. Conditional Aggregations and Sorting

### Count Employees in Each City with Salary $\ge$ 90,000 (Sorted by City Descending)

```sql
SELECT emp_city, SUM(CASE WHEN emp_salary >= 90000 THEN 1 ELSE 0 END) AS emp_count
FROM employees
GROUP BY emp_city;
ORDER BY emp_city DESC;
```

### Count Employees in Each City with Salary $\ge$ 90,000 (Sorted by City Ascending)

```sql
-- Sorting explicitly ASC
SELECT emp_city, SUM(CASE WHEN emp_salary >= 90000 THEN 1 ELSE 0 END) AS emp_count
FROM employees
GROUP BY emp_city;
ORDER BY emp_city ASC;

-- Sorting implicitly (ASC is default)
SELECT emp_city, SUM(CASE WHEN emp_salary >= 90000 THEN 1 ELSE 0 END) AS emp_count
FROM employees
GROUP BY emp_city;
ORDER BY emp_city;
```

### Count Employees in Each City with Salary $\ge$ 90,000 (Sorted by Employee Count Descending)

```sql
-- Sorting by column alias
SELECT emp_city, SUM(CASE WHEN emp_salary >= 90000 THEN 1 ELSE 0 END) AS emp_count
FROM employees
GROUP BY emp_city;
ORDER BY emp_count DESC;

-- Sorting by the full expression
SELECT emp_city, SUM(CASE WHEN emp_salary >= 90000 THEN 1 ELSE 0 END) AS emp_count
FROM employees
GROUP BY emp_city;
ORDER BY SUM(CASE WHEN emp_salary >= 90000 THEN 1 ELSE 0 END) DESC;
```

> [!TIP]
> A simpler, more standard way to filter rows before aggregation is using the `WHERE` clause instead of conditional `SUM(CASE WHEN ...)`:
> ```sql
> SELECT emp_city, COUNT(*) AS emp_count
> FROM employees
> WHERE emp_salary >= 90000
> GROUP BY emp_city
> ORDER BY emp_count DESC;
> ```

---

## 4. Minimum and Maximum Aggregations

### Find the Maximum Employee Salary in Each City
```sql
SELECT emp_city, MAX(emp_salary) AS max_salary
FROM employees
GROUP BY emp_city;
```

### Find the Minimum Employee Salary in Each City
```sql
SELECT emp_city, MIN(emp_salary) AS min_salary
FROM employees
GROUP BY emp_city;
```