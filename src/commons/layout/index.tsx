export default function Layout(props) {
    return(
        <div>
            <div>여기는 헤더</div>
            <div>여기는 배너</div>
            <div>여기는 네비게이션</div>
            <div>{props.children}</div>
            <div>여기는 푸터</div>
        </div>
    )
}