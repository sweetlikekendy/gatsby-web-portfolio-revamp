import React from "react"
import { css } from "@emotion/core"
import Arrow from "./svgs/arrow"
import { colors } from "../styles/theme"

const BackToTop = () => {
  const handleClick = e => {
    e.preventDefault()
    if (e.target.className === "to-top-link" || e.target.id === "arrow-up") {
      window.scroll({ top: 0, left: 0, behavior: "smooth" })
    }
  }
  return (
    <div
      css={css`
        margin: 1rem auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
          color: ${colors.textSecondaryBodyColor};
          text-transform: uppercase;
          font-weight: 600;
        }
        @media screen and (min-width: 768px) {
          margin: 6rem auto 2rem;
        }
      `}
    >
      <div
        css={css`
          /* display: inline-block; */
          background-color: ${colors.linkColor};
          border-radius: 50%;
          height: 75px;
          width: 75px;
          box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
          margin-bottom: 1rem;
          button {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            background-color: transparent;
            border: none;
            outline: none;
          }
          @media screen and (min-width: 768px) {
            &:hover {
              background-color: ${colors.hoverColor};
              transform: translateY(-5px);
              transition: all ease 0.3s;
            }
          }
        `}
      >
        <button className="to-top-link" onClick={handleClick}>
          <Arrow
            id="arrow-up"
            onClick={handleClick}
            size={parseInt(30)}
            fill={colors.projectCodeBtnTextColor}
          />
        </button>
      </div>
      <p>Scroll to Top</p>
    </div>
  )
}

export default BackToTop
