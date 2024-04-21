# Sử dụng một hình ảnh chứa Node.js
FROM node:20.10.0

# Thiết lập thư mục làm việc của ứng dụng
WORKDIR /app

# Sao chép tất cả các tệp vào thư mục làm việc

COPY . .

# Cài đặt các gói npm cần thiết
RUN npm install
# RUN npm run build
# RUN npm run preview
# Expose cổng 3000 (hoặc cổng mà bạn đã cấu hình cho ứng dụng của mình)
EXPOSE 3000

# Chạy ứng dụng khi container được khởi động
CMD ["npm", "run", "dev"]
