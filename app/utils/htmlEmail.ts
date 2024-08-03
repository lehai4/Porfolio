export function html({
  message,
  subject,
  email,
  name,
  phone,
}: {
  message: string;
  subject: string;
  email: string;
  name: string;
  phone: string;
}) {
  return `
    <div class="container h-full min-h-screen flex items-center justify-center">
        <div class="border rounded-lg">
            <h2>Hi,</h2>
            <h4>Tiêu đề: ${subject}</h4>
            <p>Tôi tên là: ${name}</p>
            <p>Lý do: ${message}</p>
            <p>Mong nhận được phản hồi sớm từ bạn. Nếu có bất kỳ câu hỏi đừng ngần ngại liên hệ qua số điện thoại: ${phone} hoặc email ở bên dưới.</p>
            <span>Thanks!.</span>
            <br/>
            <p className="underline">${email}</p>
        </div>
    </div>`;
}
