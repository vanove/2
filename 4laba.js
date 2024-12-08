class ProductList {
    constructor() {
      this.products = new Set();
    }
  
    // Добавить товар
    addProduct(product) {
      this.products.add(product);
    }
  
    // Удалить товар
    removeProduct(product) {
      this.products.delete(product);
    }
  
    // Проверить наличие товара
    hasProduct(product) {
      return this.products.has(product);
    }
  
    // Определить количество товаров
    getProductCount() {
      return this.products.size;
    }
  }
  
  // Пример использования:
  const productList = new ProductList();
  productList.addProduct("Телефон");
  productList.addProduct("Ноутбук");
  console.log(productList.hasProduct("Ноутбук"));  // true
  productList.removeProduct("Телефон");
  console.log(productList.getProductCount());  // 1
  class Student {
    constructor(id, group, name) {
      this.id = id;
      this.group = group;
      this.name = name;
    }
  
    // Для корректной работы Set добавим метод для сравнения объектов
    equals(other) {
      return this.id === other.id;
    }
  }
  
  class StudentList {
    constructor() {
      this.students = new Set();
    }
  
    // Добавить студента
    addStudent(student) {
      this.students.add(student);
    }
  
    // Удалить студента по номеру зачетки
    removeStudentById(id) {
      this.students.forEach(student => {
        if (student.id === id) {
          this.students.delete(student);
        }
      });
    }
  
    // Фильтровать студентов по группе
    filterByGroup(group) {
      return [...this.students].filter(student => student.group === group);
    }
  
    // Сортировать студентов по номеру зачетки
    sortById() {
      return [...this.students].sort((a, b) => a.id - b.id);
    }
  }
  
  // Пример использования:
  const studentList = new StudentList();
  studentList.addStudent(new Student(101, "Группа A", "Иванов Иван"));
  studentList.addStudent(new Student(102, "Группа B", "Петров Петр"));
  console.log(studentList.filterByGroup("Группа A"));  // Иванов Иван
  studentList.removeStudentById(101);
  console.log(studentList.sortById());  // Петров Петр
  class Cart {
    constructor() {
      this.items = new Map();
    }
  
    // Добавить товар
    addItem(id, name, quantity, price) {
      this.items.set(id, { name, quantity, price });
    }
  
    // Удалить товар по id
    removeItemById(id) {
      this.items.delete(id);
    }
  
    // Удалить товары по названию
    removeItemsByName(name) {
      for (const [id, item] of this.items) {
        if (item.name === name) {
          this.items.delete(id);
        }
      }
    }
  
    // Изменить количество товара
    updateQuantity(id, quantity) {
      if (this.items.has(id)) {
        this.items.get(id).quantity = quantity;
      }
    }
  
    // Изменить стоимость товара
    updatePrice(id, price) {
      if (this.items.has(id)) {
        this.items.get(id).price = price;
      }
    }
  
    // Количество позиций в корзине
    getItemCount() {
      return this.items.size;
    }
  
    // Общая стоимость всех товаров
    getTotalCost() {
      let total = 0;
      for (const item of this.items.values()) {
        total += item.quantity * item.price;
      }
      return total;
    }
  }
  
  // Пример использования:
  const cart = new Cart();
  cart.addItem(1, "Телефон", 2, 500);
  cart.addItem(2, "Ноутбук", 1, 1500);
  console.log(cart.getTotalCost());  // 2500
  cart.updateQuantity(1, 3);
  console.log(cart.getTotalCost());  // 3000
  cart.removeItemsByName("Ноутбук");
  console.log(cart.getItemCount());  // 1
  const cache = new WeakMap();

  function expensiveFunction(param) {
    if (cache.has(param)) {
      console.log("Результат взят из кеша");
      return cache.get(param);
    }
    
    const result = param ** 2;  // Пример ресурсоемкой операции
    cache.set(param, result);
    return result;
  }
  
  // Пример использования:
  const param1 = { value: 5 };
  console.log(expensiveFunction(param1));  // Выполняется расчет
  console.log(expensiveFunction(param1));  // Результат взят из кеша
        
