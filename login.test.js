const login = require("./login");

describe("Kiểm tra chức năng đăng nhập", () => {

    test("Đăng nhập đúng tài khoản admin / 123 phải trả về true", () => {
        expect(login("admin", "123")).toBe(true);
    });

    test("Sai mật khẩu phải trả về false", () => {
        expect(login("admin", "456")).toBe(false);
    });

    test("Sai username phải trả về false", () => {
        expect(login("user", "123")).toBe(false);
    });

    test("Sai cả username và password phải trả về false", () => {
        expect(login("user", "456")).toBe(false);
    });

});
