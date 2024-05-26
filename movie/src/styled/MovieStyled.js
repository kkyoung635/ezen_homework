import styled, { css } from 'styled-components';

export const MovieWrap = styled.div`
    width: 1070px;
    margin: 20px auto;
`;
export const MovieContainer = styled.div`
    width: 100%;
    margin: auto;
    .toggle {
        line-height: 40px;
        span {
            vertical-align: middle;
            margin-right: 20px;
            width: 32px;
            height: 18px;
            background-color: #ddd;
            border-radius: 30px;
            display: inline-block;
            position: relative;
            transition: 0.3s;

            &::after {
                content: '';
                display: block;
                width: 12px;
                height: 12px;
                position: absolute;
                left: 4px;
                top: 50%;
                transform: translateY(-50%);
                border-radius: 40px;
                background-color: #fff;
                transition: 0.3s;
            }
            &.on {
                &::after {
                    left: 17px;
                }
                background-color: #3b35fa;
            }
        }
        em {
            font-weight: 600;
            margin-left: 8px;
            &:first-child {
                font-size: 13px;
            }
        }
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin: auto;
    }
`;
export const MovieCardLi = styled.li`
    width: 260px;
    b {
        width: 260px;
        height: 360px;
        display: block;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
        }
    }
    article {
        margin-top: 10px;
        width: 100%;
        .title {
            display: flex;
            b {
                width: 24px;
                height: 24px;
                display: block;
                border-radius: 4px;
                color: #fff;
                letter-spacing: -0.8px;
                font-size: 12px;
                text-align: center;
                line-height: 24px;
                box-sizing: border-box;
                font-weight: 600;
            }
            strong {
                font-size: 16px;
                line-height: 24px;
                margin-left: 8px;
            }
        }
        .info {
            font-size: 12px;
            display: flex;
            gap: 10px;
        }
    }
`;
export const MovieButton = styled.form`
    display: flex;
    justify-content: space-between;
    button {
        &.on {
            background: #3b35fa;
        }
    }
`;
export const MovieSearch = styled.form`
    text-align: center;
    p {
        margin: 10px;
        display: inline-block;
        border-bottom: 1.5px solid #000;
        input {
            width: 350px;
            line-height: 24px;
            border: none;
        }
        button {
            width: 50px;
            line-height: 24px;
            vertical-align: middle;
            background: transparent;
            border: none;
            font-weight: 500;
            cursor: pointer;
        }
    }
    div {
        width: 400px;
        margin: auto;
        display: flex;
        justify-content: start;
        align-items: start;
        flex-wrap: nowrap;
        line-height: 40px;
        h3 {
            width: 200px;
            font-weight: 20px;
            margin-right: 10px;
            font-weight: 500;
        }
        ul {
            display: flex;
            flex-wrap: wrap;
            width: 1200px;
            li {
                display: block;
                font-weight: 700;
                span {
                    background: #eee;
                    border-radius: 40px;
                    padding: 4px 10px;
                    font-size: 14px;
                }
                button {
                    cursor: pointer;
                    background-color: transparent;
                    border: none;
                    i {
                        font-weight: 500;
                    }
                }
            }
        }
    }
`;
export const MovieFloat = styled.div`
    display: none;
    width: 800px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: block;
    box-sizing: border-box;
    z-index: 10;
    &::after {
        content: 'x';
        position: absolute;
        top: -60px;
        right: 0;
        display: block;
        color: #fff;
        font-size: 40px;
        font-weight: 300;

        cursor: pointer;
    }
    .mv-info {
        position: absolute;
        color: #fff;
        z-index: 30;
        padding: 40px;
        h3 {
            font-size: 40px;
            font-weight: 700;
        }
        h4 {
            font-size: 24px;
            margin-bottom: 40px;
            opacity: 0.3;
        }
        strong {
            display: block;
            font-size: 16px;
            box-sizing: border-box;
            word-break: keep-all;
        }
        animation: viewing 2s;
    }
    @keyframes viewing {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    span {
        width: 100%;
        height: 100%;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to right, rgba(0, 0, 0, 1), transparent); // 그라데이션 설정
            z-index: 1;
        }
        img {
            width: 100%;
            height: auto;
        }
    }
`;
