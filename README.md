
## I.  ออกแบบ UI และ Layout สถานะ เสร็จแล้ว

ดูผลลัพธ์ได้ที่ https://appmantest.herokuapp.com/


หรือจะดูผลการทำงานผ่านโค้ด
ให้ดาวน์โหลดหรือโคลนลงมา
จากนั้น ใช้คำสั่ง
```
$ npm install
```
แล้วก็ Run Server ก่อนด้วยคำสั่ง
```
$ npm run server
```
จากนั้นก็ Run React Client ด้วยคำสั่ง
```
$ npm run client // open localhost:8080
```
 


## II. UI Component & Service สถานะ เสร็จแล้ว

ในส่วนนี้จากโจทย์บอกให้แสดงผลดังภาพ
(โจทย์ : https://github.com/thirawutp/appman-exam)

ผมเข้าใจว่าให้เอา msg ของ response มาแสดง
คือหากว่า status code ไม่เท่ากับ 200 ก็จะแสดง error msg ตามที่ API ส่งกลับมา

ที่ผมเห็นใน API จะมี
- email or password can not be empty
- email or password must be string
- email or password may be wrong

แต่จากภาพตัวอย่างมันแตกต่างออกไป คือ
E-mail or password is incorrect

ผมเลยเลือกที่จะแสดงตามผลที่ API ส่งมา
หากเข้าใจผิดต้องขออภัย

username : example@appman.co.th, 
password : password


## III. JS & Unit Test สถานะ สับสน

ส่วนนี้ผมสงสัยว่าโจทย์จะผิด

ให้ผมทำ test โดยให้ได้ผลลัพธ์ดังภาพ
![](screenshots/pass-test.png)

คือต้องให้ผ่าน 5 test
โดยการ เปิดไฟล์ /utils/index.js เพื่อทำการเขียน function

ให้ผมทำ login แต่ให้ไป test เรื่องคะแนนของเด็กนักเรียน
เลยไม่ทราบว่าต้องการให้ผมเขียน test case เองทั้งหมดใหม่หรือว่ายังไง

เพราะคะแนนใน part นี้
- Pass 5 cases (15 คะแนน) 
- Logic (15 คะแนน)
- Code style (10 คะแนน)

เลยคาดว่าน่าจะแก้โจทย์มาไม่หมด เพราะผมคงได้ part นี้เต็มถ้าปล่อยผม test เรื่อยเปื่อย

ขอบคุณครับ
