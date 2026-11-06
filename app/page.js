export default function Home() {
  return (
    <main style={{ maxWidth: 760, margin: "40px auto", padding: 32, background: "white", borderRadius: 16 }}>
      <h1>Academic Check Web Service</h1>
      <p>ตัวอย่างงานวิชาเทคโนโลยีเว็บเซอร์วิส: ส่งข้อมูลตรวจสอบจบการศึกษาในรูปแบบ JSON</p>
      <h2>API Endpoint</h2>
      <p><code>/api/academic-check</code></p>
      <p>
        <a href="/api/academic-check" target="_blank" rel="noreferrer">
          เปิดดูข้อมูล JSON
        </a>
      </p>
      <p>HTTP Method: GET | Response: application/json | Status: 200 OK</p>
    </main>
  );
}
