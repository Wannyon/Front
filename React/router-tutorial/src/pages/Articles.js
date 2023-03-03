import { Link, NavLink, Outlet } from "react-router-dom"

const Articles = () => {
    const activeStyle = {
        color: "green",
        fontSize: 21
    };

    return (
        <div>
            {/* 이 컴포넌트는 Route의 children으로 들어가는 JSX를 보여주는 역할을 한다. */}
            <Outlet />

            <ul>
                <li>
                    <NavLink
                        to={"/articles/1"}
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}
                    >
                        게시글 1
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"/articles/2"}
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}
                    >
                        게시글 2
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"/articles/3"}
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}
                    >
                        게시글 3
                    </NavLink>
                </li>
            </ul>
        </div>

    );
};

export default Articles;