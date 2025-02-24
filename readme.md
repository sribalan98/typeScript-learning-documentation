# TypeScript Learning Report - Daily Progress

## 📅 Date: [Your Learning Date Here]

### **📝 Quiz Questions & Answers**

#### **1️⃣ Basic Type Declarations**

**Question:** What will be the output of the following code?

```typescript
let name: string = "Alice";
let age: number = 25;
console.log(typeof name, typeof age);
```

✅ **Your Answer:** A) "string number"  
✅ **Correct Answer:** A) "string number"  
✔ **Result:** ✅ Correct

---

#### **2️⃣ Functions & Default Parameters**

**Question:** What is the **default value** of `age` in the following function?

```typescript
function createUser(name: string, age: number = 30): void {
  console.log(name, age);
}
createUser("Bob");
```

✅ **Your Answer:** C) 30  
✅ **Correct Answer:** C) 30  
✔ **Result:** ✅ Correct

---

#### **3️⃣ Generics**

**Question:** What is the generic type in the following function?

```typescript
function checkValue<T>(value: T): T {
  return value;
}
console.log(checkValue<number>(10));
```

✅ **Your Answer:** B) number  
❌ **Correct Answer:** A) T  
❌ **Result:** ❌ Incorrect

---

#### **4️⃣ Type Aliases & Objects**

**Question:** Which of the following **correctly defines** a TypeScript type alias?
✅ **Your Answer:** A)

```typescript
type Person = { name: string; age: number };
```

✅ **Correct Answer:** A)
✔ **Result:** ✅ Correct

---

#### **5️⃣ Arrays of Objects**

**Question:** How would you declare an **array of objects** where each object has `name: string` and `age: number`?
✅ **Your Answer:** A)

```typescript
let users: { name: string; age: number }[];
```

✅ **Correct Answer:** A)
✔ **Result:** ✅ Correct

---

## **📊 Score & Performance**

| **Total Questions** | **Correct Answers** | **Incorrect Answers** | **Accuracy (%)** |
| ------------------- | ------------------- | --------------------- | ---------------- |
| 5                   | 4                   | 1                     | 80%              |

✔ **Final Score:** **4/5** (80%) 🎉

---

## **📌 Next Steps**

- ✅ Continue practicing **Generics** for better understanding.
- ✅ Learn about **utility types** like `Partial<T>`, `Readonly<T>`, `Record<K, T>`.
- ✅ Keep coding daily and test with more real-world examples!

🚀 **Keep up the great work! More challenges coming soon!** 🔥
