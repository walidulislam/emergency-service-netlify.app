1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById দিয়ে id element খুঁজে আনা যায় এবং id উপর বিভিন্ন কাজ ইভেন্ট সম্পন্ন করা যায়, একটি পেইজে একটিমাত্র id থাকলে সব সময় একটি element রিটার্ন করবে এবং এক্ষেত্রে getElementById ইউজ করা হয়।
 getElementsByClassName একাধিক class থাকলে একটি class দিয়ে এলিমেন্ট গুলো ধরা যায়। querySelector CSS selector এর মত কাজ করে এটি ব্যবহার করে id, class, tag সবকিছুকে ধরা যায়।
CSS selector এর মত কাজ করে এটি ব্যবহার করে id, class, tag সবকিছুকে ধরা যায়। querySelectorAll এটি সহজে loop চালানো যায় এবং সব একই রকম এলিমেন্ট খুজে আনে।

2.How do you create and insert a new element into the DOM?
Ans:প্রথমে একটি div বানালাম নতুন , তার ভেতর কিছু লিখে দেই কোথায় বসাতে চাই। এটি সহজে ব্রাউজারে যোগ হয় ডাইনামিক ভাবে।
3.What is Event Bubbling and how does it work?
Ans: Event Bubbling হ্যালো একটি বাটনের উপর ক্লিক করলে তা বাটনে আটকে থাকে না উপরের দিকে যায় এবং তার parent element কে ধরে।

4.What is Event Delegation in JavaScript? Why is it useful?
Ans:Event delegation হ্যালো parent এলিমেন্ট এবং ইভেন্ট বসিয়ে এর চাইল্ড ইভেন্ট গুলোর একসাথে ধরার একটি মাধ্যম

5.What is the difference between preventDefault() and stopPropagation() methods?
Ans:preventDefault() কাজ করা বন্ধ করে 
stopPropagation()ঘটনা ছাড়ানো বন্ধ করে





