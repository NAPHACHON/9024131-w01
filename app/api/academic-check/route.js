import { NextResponse } from "next/server";

const academicData = {
  studentSummary: {
    minimumCredits: 124,
    registeredCredits: 99,
    passedCredits: 99,
    pendingCredits: 19,
    highestStudyYear: 16,
    studyYear: 4,
    currentYear: 3,
    minimumGPAX: 2.0,
    GPAX: 3.59,
    majorGPA: 0.0,
    computerSkill: "PASS",
    languageSkill: "PASS",
    graduationStatus: false
  },
  curriculum: [
    {
      code: "1",
      name: "หมวดวิชาศึกษาทั่วไป",
      credits: 30,
      children: [
        {
          code: "1.1",
          name: "กลุ่มวิชาภาษาและการสื่อสาร",
          credits: 9,
          children: [
            {
              code: "1.1.1",
              name: "กลุ่มวิชาภาษาอังกฤษ",
              credits: 6, CA: 6, CS: 6, CW: null, CG: 6,
              PT: 16.5, GPA: 2.75, status: true
            },
            {
              code: "1.1.2",
              name: "กลุ่มวิชาภาษาไทยและภาษาอื่น",
              credits: 3, CA: 3, CS: 3, CW: null, CG: 3,
              PT: 7.5, GPA: 2.5, status: true
            }
          ]
        },
        {
          code: "1.2",
          name: "กลุ่มวิชามนุษยศาสตร์และสังคมศาสตร์",
          credits: 12,
          children: [
            {
              code: "1.2.1", name: "กลุ่มวิชามนุษยศาสตร์",
              credits: 3, CA: 3, CS: 3, CW: null, CG: 3,
              PT: 10.5, GPA: 3.5, status: true
            },
            {
              code: "1.2.2", name: "กลุ่มวิชามนุษยศาสตร์",
              credits: 3, CA: 3, CS: 3, CW: null, CG: 3,
              PT: 10.5, GPA: 3.5, status: true
            },
            {
              code: "1.2.3", name: "กลุ่มวิชาสังคมศาสตร์",
              credits: 3, CA: 3, CS: 3, CW: null, CG: 3,
              PT: 9, GPA: 3.0, status: true
            },
            {
              code: "1.2.4", name: "กลุ่มวิชาสังคมศาสตร์",
              credits: 3, CA: 3, CS: 3, CW: null, CG: 3,
              PT: 10.5, GPA: 3.5, status: true
            }
          ]
        },
        {
          code: "1.3",
          name: "กลุ่มวิชาวิทยาศาสตร์ คณิตศาสตร์ เทคโนโลยีและการกีฬา",
          credits: 9,
          children: [
            {
              code: "1.3.1", name: "กลุ่มวิชาวิทยาศาสตร์",
              credits: 3, CA: 3, CS: 3, CW: null, CG: 3,
              PT: 9, GPA: 3.0, status: true
            },
            {
              code: "1.3.2", name: "กลุ่มวิชาคณิตศาสตร์",
              credits: 3, CA: 3, CS: 3, CW: null, CG: 3,
              PT: 12, GPA: 4.0, status: true
            }
          ]
        }
      ]
    },
    {
      code: "2",
      name: "หมวดวิชาเฉพาะ",
      credits: 88,
      children: [
        {
          code: "2.1", name: "กลุ่มวิชาแกน",
          credits: 9, CA: 9, CS: 9, CW: null, CG: 9,
          PT: 33, GPA: 3.66, status: true
        },
        {
          code: "2.2",
          name: "วิชาเฉพาะด้าน",
          credits: 53,
          children: [
            {
              code: "2.2.1",
              name: "กลุ่มประเด็นด้านองค์การและระบบสารสนเทศ",
              credits: 9, CA: 6, CS: 6, CW: 3, CG: 6,
              PT: 24, GPA: 4.0, status: false
            },
            {
              code: "2.2.2",
              name: "กลุ่มเทคโนโลยีเพื่องานประยุกต์",
              credits: 23, CA: 18, CS: 18, CW: 5, CG: 18,
              PT: 67.5, GPA: 3.75, status: false
            },
            {
              code: "2.2.3",
              name: "กลุ่มเทคโนโลยีและวิธีการทางซอฟต์แวร์",
              credits: 12, CA: 12, CS: 12, CW: null, CG: 12,
              PT: 48, GPA: 4.0, status: true
            },
            {
              code: "2.2.4",
              name: "กลุ่มโครงสร้างพื้นฐานของระบบ",
              credits: 9, CA: 6, CS: 6, CW: 3, CG: 6,
              PT: 21, GPA: 3.5, status: false
            }
          ]
        },
        {
          code: "2.3", name: "วิชาเลือก",
          credits: 18, CA: 18, CS: 18, CW: null, CG: 18,
          PT: 66, GPA: 3.66, status: true
        },
        {
          code: "2.4", name: "วิชาประสบการณ์ภาคสนามและสหกิจศึกษา",
          credits: 8, CA: null, CS: null, CW: 8, CG: null,
          PT: null, GPA: null, status: false
        }
      ]
    },
    {
      code: "3", name: "หมวดวิชาเลือกเสรี",
      credits: 6, CA: null, CS: null, CW: 6, CG: null,
      PT: null, GPA: null, status: false
    }
  ],
  columnDescriptions: {
    CA: "จำนวนหน่วยกิตที่ลงทะเบียน",
    CS: "จำนวนหน่วยกิตที่ผ่าน",
    CW: "จำนวนหน่วยกิตที่ขาด",
    CG: "จำนวนหน่วยกิตที่คิดเกรด",
    PT: "จำนวนคะแนน",
    GPA: "เกรดเฉลี่ย"
  },
  note: "ข้อมูลตัวอย่างถอดจากภาพหน้าจอที่ได้รับ บางรายการอาจไม่ครบเนื่องจากภาพตารางถูกตัด"
};

export async function GET() {
  return NextResponse.json(academicData, {
    status: 200,
    headers: {
      "Cache-Control": "no-store"
    }
  });
}
