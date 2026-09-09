# SQL Basic DDL and DML Commands

A quick reference guide for basic Data Definition Language (DDL) and Data Manipulation Language (DML) commands in SQL.

---

## 1. Table Creation and Data Insertion

```sql
-- Create an employee table
CREATE TABLE Emp_krg (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(100),
    salary NUMERIC(10, 2)
);

-- Insert sample records
INSERT INTO Emp_krg (emp_id, emp_name, salary) 
VALUES
(101, 'Rahul', 50000),
(102, 'Priya', 60000),
(103, 'Amit', 55000);

-- Query the table
SELECT * FROM EMP_KRG;
```

---

## 2. Table Structure Modifications (DDL)

DDL commands modify the table schema or structure.

```sql
-- I. Add a new column
ALTER TABLE EMP_KRG
ADD COLUMN gender VARCHAR(10);

SELECT * FROM EMP_KRG;

-- II. Add a NOT NULL constraint to a column
ALTER TABLE EMP_KRG
ALTER COLUMN gender SET NOT NULL;

-- III. Change the data type of an existing column
ALTER TABLE EMP_KRG
ALTER COLUMN gender TYPE VARCHAR(100);

SELECT * FROM EMP_KRG;

-- IV. Rename an existing column
ALTER TABLE EMP_KRG
RENAME SALARY TO emp_salary;

-- V. Rename the table
ALTER TABLE EMP_KRG
RENAME TO SAMPLE_EMP_NAME;

SELECT * FROM SAMPLE_EMP_NAME;

-- VI. Drop a column
ALTER TABLE SAMPLE_EMP_NAME
DROP COLUMN gender;

-- VII. Truncate the table (removes all records, preserves structure)
TRUNCATE TABLE SAMPLE_EMP_NAME;

-- VIII. Drop the table (completely deletes the table)
DROP TABLE SAMPLE_EMP_NAME;
```

---

## 3. Data Modification (DML)

DML commands modify the data inside the table.

```sql
-- I. Update values using conditional OR logic
UPDATE EMP_KRG
SET gender = 'Male'
WHERE emp_id = 101 OR emp_id = 103;

-- II. Update values using the IN operator
UPDATE EMP_KRG
SET gender = 'Male'
WHERE emp_id IN (101, 103);

UPDATE EMP_KRG
SET gender = 'Female'
WHERE emp_id IN (102);

-- III. Delete specific rows matching a condition
DELETE FROM EMP_KRG
WHERE emp_id % 2 = 1;

-- Query the final state
SELECT * FROM EMP_KRG;
```