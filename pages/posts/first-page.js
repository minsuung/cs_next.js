import Link from 'next/link'
export default function FirstPage() {
    return (
        <div>
            <h2>안녕하세요! 정보시스템학과 김민성입니다.</h2>
            <h5>전산학개론 과제중...</h5>
            <p>
                취미는 운동하는 것입니다. 축구,농구,배드민턴 여러가지 합니다.
            </p>
            <Link href="/">Back to home</Link>
        </div>
    )
}
