export const metadata = {
  title: "Academic Check API",
  description: "ตัวอย่าง Web Service สำหรับข้อมูลตรวจสอบจบการศึกษา"
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: "40px", background: "#f5f7fb", color: "#24324a" }}>
        {children}
      </body>
    </html>
  );
}
