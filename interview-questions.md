# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. Are Ruby methods accessors or mutators?

  Your answer: Most ruby built-in methods are accessors and do not change the information permanently. You can usually still look at the original piece of info & the output that changes it. 
  
  This is in contrast to Javascript, because JS methods/functions usually work on a variable and change it permanently.

  If you want to permanently change a variable in ruby, you can use the bang operator at the end of a method.

  Researched answer:
  Accessor methods are known as getter methods, and mutator methods are setter methods.





2. What is a block in Ruby?

  Your answer: Blocks in ruby are an iteration method. 

  Researched answer: blocks are similar to anonymous functions in javascript. 

  they can be created with do/end kw or with {}. 
  
  they are also code that is passed to a method.



3. Ruby has an implicit return. What does that mean?

  Your answer: Implicit return means that you don't have to explicitly write "return" prior to the information you would like your method to return.  In Ruby, it is assumed that the last line of code is what will be returned.

  The keyword return does exist in ruby but you don't have to use it. 

  Researched answer:

  when return isn’t explicitly called within a method then Ruby returns the value of the last executed instruction in the method



4. What is object-oriented programming? How is it different than functional programming?

  Your answer: Object oriented programming is programs that are built upon objects that interact with one another

  Researched answer:
  Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods).

  in OOP, each "thing" is a concept with its own data and methods.

  OOP uses objects to represent things. Objects could be data structures. and objects hold data about them in attributes.

  functional programming attemps to avoid changing state and mutable data. Functional programming works better when there are no boundaries required or when those boundaries are already pre-defined. 

  functional programming has taken a big upswing lately - people think its easier to write code faster with functional programming.

  https://medium.com/@shaistha24/functional-programming-vs-object-oriented-programming-oop-which-is-better-82172e53a526




5. What is the difference between a class and an object?

  Your answer: An object is a data type in that contain static data, and a class is a blueprint for an object.

  They are applied the same way in both Javascript and Ruby.

  Researched answer:

  Objects can contain functions
  When a function belongs to an object it is a method.
  this - is a javascript kw that references the object. it can be used to crate a variable that access a value within an object.
  because objects are a data type, they can also be single indexes of an array.



6. STRETCH: What is Duck Typing?

  Your answer:

  Researched answer:
  Ruby itself is a dynamically type-checked language and follows a “duck typing” approach:

  "If it walks like a duck and it quacks like a duck, then it must be a duck."

  What this means is that Ruby developers generally don’t worry too much about an object’s type, but whether it responds to certain “messages” (or methods).

  ex. using an array method on anything that is iterable.
    it doesn't matter that its an array method, a string is iterable and so we should just be able to apply to methods on a string.

  this is referring to data types- if you create a custom method that operates on a specific data type, there is a no reason to restrict the behavior from applying to other data types.

    its a philosophy- there is no need to limit down the scope of a behavior. As long as a behavior that can be enacted on something, then why restrict it. You can call the behavior as long as it can work.

  The object's suitability is determined by the correct properties instead of if the object is the correct type.





## Looking Ahead: Terms for Next Week
- PostgreSQL
    - open source data management system developed by UC berkeley
- API
    - application programming interface. Creates an intermediary: in the simplest terms, a website designed for other websites or for computers.
- CRUD
    - Create, Read, Update, Destroy
    - if you are building an app, you want the user to have all those different functionalities.
      ex. for an address book, you want users to be able to do all the 4 CRUD functionalities to their contacts.
      can you see it, can you add to it, can you update  it, can you remove it.
- Ruby on Rails
    - a web app framework to create database backed full-stack web apps.
    - the database is where the storage is for creating, updating, and deleting stuff.
- ORM
    - Object Relational Mapping
    - Converts data between incompatible systems using OOP
- Active Record
    - the model (data, persistent storage) layer of Ruby on Rails
    - typically it is specific for Ruby on Rails
    - it is the ORM for Ruby on Rails
We are connecting our PostgreS with Ruby on Rails using Active Record as the ORM.
