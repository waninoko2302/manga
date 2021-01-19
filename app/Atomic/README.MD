Author: Tiến
Created date: 31/12/2020
Description: Thư mục được cấu trúc theo chuẩn Atomic Design, tương đương với thư mục components (sẽ được thay thế trong tương lai)

Ý nghĩa của các thành phần (thư mục) trong Atomic:

- atoms (nguyên tử): chứa các components được HOC lại từ MUI components. Không chứa style margin và position, logic, action hay function gì ở đây.
- molecules (phân tử): tập hợp nhiều atoms tạo thành components lớn hơn. Không chứa style margin và position.
- organisms (sinh vật): tập hợp nhiều molecules hoặc atoms để tạo nên giao diện chi tiết hơn. Không chứa style margin và position.
- templates (nguyên mẫu): cài đặt bố cục, khung lưới cơ bản của 1 trang, nhưng chưa có style, color hay component được render. Có thể style margin và khoảng cách các bố cục.
- pages (trang): các trang sẽ nằm ở thư mục containers, sử dụng các templates có sẵn và đưa các components vào để kết nối chúng với nhau.

* Đọc thêm:
  Các tài liệu tham khảo để hiểu rõ hơn về cấu trúc thư mục:
  1 > Atomic Design với React: [https://viblo.asia/p/atomic-design-voi-react-YWOZrB2pZQ0]
  2 > Áp dụng Atomic design cho dự án React: [https://viblo.asia/p/ap-dung-atomic-design-cho-du-an-react-Eb85oLWjK2G]
  3 > Cấu trúc & Quy ước: [https://xdevclass.com/cau-truc-react-folder-toi-uu-de-bao-tri-de-nang-cap/]

* Lưu ý:

- Link số 1, nhớ xem kỹ ví dụ 1 và 2 để hiểu cách người ta Review qua 1 giao diện, đánh giá và chia nhỏ component theo cấu trúc Atomic đi từ tổng quát đến từng chi tiết. Tức chúng ta chia component theo hướng top-down.
  Ví dụ: xem qua 1 page, suy ra template của page đó, rồi tách nhỏ xuống organisms, molecules và liệt kê các atoms được sử dụng.
- Việc đánh giá ở trên nên cân nhắc kĩ lưỡng và theo đúng các định nghĩa chức năng và vai trò của các thành phần trong Atomic đã giới thiệu ở trên.
- Mỗi atoms là một nguyên tử độc lập và chỉ kế thừa từ Root Component => đúng bản chất không chứa logic hay function, không style margin, position gì ở đây.
  Ví dụ: AtomAvatarSize24 và AtomAvatarSize64 là độc lập, kế thừa từ root là AtomAvatar. AtomAvatar ở đây được kế thừa từ Avatar của MUI để control 100% mà không phải đụng đến MUI core.
- Trong mỗi thư mục của thành phần atomic chứa các thư mục của từng source.
  Ví dụ: các molecules của source page sẽ group lại trong thư mục molecules/Page

* Quy ước về Đặt tên Component mới:

- atoms: tên thư mục theo chuẩn MUI (như Avatar, Button), tên file theo chuẩn BEM như sau: tiền tố Atom + tên thư mục + tên định danh.
  Ví dụ: Atom + Avatar + Size24 => AtomAvatarSize24
- molecules: đặt theo tên từ organisms sử dụng nó truyền xuống.
  Ví dụ: organisms là PageHeader, molecules mô tả Cover => tên molecules sẽ là PageHeaderCover.
- organisms: đặt tên theo vị trí, ý nghĩa của nó được đặt trên templates.
  Ví dụ: templates là Page, organisms mô tả vị trí Header => tên organisms sẽ là PageHeader.
- templates: tên đặt theo layout của trang sử dụng.
  Ví dụ: PageTemplate, PersonalTemplate, NewsfeedTemplate, BackendTemplate, AffTemplate, LoginTemplate...
- pages: nằm ở thư mục container của source, sử dụng template để build. Nên đặt tên theo tên templates + container.
  Ví dụ: PageContainer, PersonalContainer, LoginContainer...
