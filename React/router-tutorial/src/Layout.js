import { Outlet, useNavigate } from "react-router-dom"

const Layout = () => {
    // Link컴포넌트를 사용하지 않고 다른 페이지로 이동해야 할때 사용하는 Hooks
    const navigate = useNavigate();
    const goBack = () => {
        // 이전 페이지로 이동
        navigate(-1);   // = history.back()
    };

    const goArticles = () => {
        // articles 경로로 이동
        navigate("/articles", { replace: true });
    };

    return (
        <div>
            <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
                <button onClick={goBack}>뒤로가기</button>
                <button onClick={goArticles}>게시글 목록</button>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;