Type vs Interface in TypeScript: এদের মধ্যে পার্থক্য কী?

Introduction

TypeScript শেখার সময় আমি লক্ষ্য করেছি, type এবং interface দুটোই Object-এর Structure তৈরি করতে ব্যবহার করা হয়। শুরুতে আমার মনে হয়েছিল, দুটো হয়তো একই কাজ করে। কিন্তু ভালোভাবে শেখার পর বুঝতে পারলাম, এদের মধ্যে কিছু পার্থক্য রয়েছে। এই Blog-এ আমি সহজভাবে আমার শেখা বিষয়গুলো তুলে ধরব।

What is Type?

type ব্যবহার করে আমরা নিজের মতো Custom Type তৈরি করতে পারি। এটি Object, Union, Primitive Type সহ বিভিন্ন কাজে ব্যবহার করা যায়।

type Student = {
    name: string;
    age: number;
};

const student: Student = {
    name: "Eyasin",
    age: 22
};

এখানে Student নামে একটি Custom Type তৈরি করেছি। এটি নিশ্চিত করে যে Student Object-এর মধ্যে name এবং age থাকবে।

What is Interface?

interface মূলত Object-এর Structure নির্ধারণ করতে ব্যবহার করা হয়। এটি বলে দেয় একটি Object-এর মধ্যে কী কী Property থাকা প্রয়োজন।

interface Teacher {
    name: string;
    subject: string;
}

const teacher: Teacher = {
    name: "Rahim",
    subject: "TypeScript"
};

এখানে Teacher Interface-এর মাধ্যমে একটি Teacher Object-এর Structure নির্ধারণ করেছি।

Main Differences

type এবং interface দুটোই Object-এর Structure তৈরি করতে পারে। তবে type দিয়ে Union Type তৈরি করা যায়, আর interface-এ একই নামের একাধিক Declaration Merge হতে পারে।

type ID = string | number;

interface Person {
    name: string;
}

interface Person {
    age: number;
}

এখানে দুটি Person Interface একসঙ্গে Merge হয়ে একটি Interface তৈরি করেছে।

When Should We Use Them?

আমার শেখার অভিজ্ঞতা অনুযায়ী, Object-এর Structure তৈরি করতে এবং Interface Extend করতে interface ব্যবহার করা সুবিধাজনক। অন্যদিকে Union Type বা Complex Type তৈরি করতে type বেশি কাজে লাগে। তবে পরিস্থিতি অনুযায়ী দুটিই ব্যবহার করা যায়।

Conclusion

TypeScript-এ type এবং interface দুটোই গুরুত্বপূর্ণ। এদের কাজের মধ্যে কিছু মিল থাকলেও কিছু আলাদা সুবিধা রয়েছে। কোন পরিস্থিতিতে কোনটি ব্যবহার করতে হবে, সেটা বুঝতে পারলে আরও পরিষ্কার ও সুন্দর TypeScript Code লেখা সম্ভব।