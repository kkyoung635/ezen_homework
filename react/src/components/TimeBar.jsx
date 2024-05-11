import './TimeBar.scss';
const TimeBar = () => {
    return (
        <>
            <div className="con-box box1">
                <div className="time-bar">
                    <a href="#">
                        <i className="xi-alarm-o"></i>
                        <p>
                            운영시간 <span className="week">평일</span>11:00 - 19:00
                            <span className="week">주말/공휴일</span>11:00 - 20:00
                        </p>
                    </a>
                </div>
            </div>
        </>
    );
};

export default TimeBar;
