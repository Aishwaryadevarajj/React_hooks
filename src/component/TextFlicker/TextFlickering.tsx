"use client";
import React, { RefObject, useEffect, useState } from "react";
import styles from "./TextFlickering.module.scss";

export function TextFlickering({
  className = {}, // maincontainer classname
  words = "", // Text or words
  breakLineFullWidth = false, // if false text underline leading line do not extent to the full width of the text container
  removeUnderlineAfterHover = false, // if true, after hovering remove the underline
  trigerredAnimation = false, // if true trigerring the animation
  underline = false, // if false text should not have underline
  intersectinRef, // ref that are passed from parent container to triger the animation when the parent container is on view of the screen
  transformFromBelow = false, // if true transform the text from below on trigerring of the animation effect
  onHoverTrigerredAnimation = false, // used when you want to trigerred the animation from hovering a parent container
  animationIterationCount = 2, // flickering animation repetation
  textAlign = "flex-start", // align the text
  textClassName = {}, // classname for the text
  onHoverDisableAnimation = false, // disable animation
  fontColor = "#000", // font color of the text
  onClick = () => {}, // capturing click event
  wordSpacingStyleClassName = {}, // spacing between words
  lineGap = "15", // line gap of the underline hover animation
  underlineAnimationDuration = 0.6, // animation duration for underline
  removeUnderlineAnimationDuration = 1.6,
  underlineClassname = {},
  underlineColor = fontColor,
  href = "",
  cursor = "pointer",
  transformFromBelowAnimationDuration = "1.5", // transform text from below delay/duration,
  showLine = false,
}: {
  className?: any;
  intersectinRef?: RefObject<HTMLDivElement>;
  words: string;
  breakLineFullWidth?: boolean;
  removeUnderlineAfterHover?: boolean;
  trigerredAnimation?: boolean;
  underline?: boolean;
  transformFromBelow?: boolean;
  onHoverTrigerredAnimation?: boolean;
  animationIterationCount?: number;
  textAlign?: string;
  textClassName?: any;
  onHoverDisableAnimation?: any;
  fontColor?: string;
  onClick?: () => void;
  wordSpacingStyleClassName?: any;
  lineGap?: string;
  underlineAnimationDuration?: number;
  removeUnderlineAnimationDuration?: number;
  underlineClassname?: any;
  underlineColor?: string;
  href?: string;
  cursor?: string;
  transformFromBelowAnimationDuration?: string;
  showLine?: boolean;
}): JSX.Element {
  const [displayAnimation, setDisplayAnimation] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDisplayAnimation(!onHoverTrigerredAnimation);
    }, 10);
    setTimeout(() => {
      setDisplayAnimation(onHoverTrigerredAnimation);
    }, 20);
  }, [onHoverTrigerredAnimation]);
  useEffect(() => {
    if (breakLineFullWidth) {
      setTimeout(() => setDisplayAnimation(false), 1);
    }
  }, []);
  useEffect(() => {
    if (trigerredAnimation) {
      setTimeout(() => {
        setDisplayAnimation(false);
      }, 10);
      setTimeout(() => {
        setDisplayAnimation(true);
      }, 20);
      setTimeout(() => {
        setDisplayAnimation(false);
      }, 1000);
    }
  }, [trigerredAnimation]);
  function profileHeaderContainer() {
    return {
      animationDuration: `${underlineAnimationDuration}s`,
    };
  }
  function profileHeading() {
    return {
      transform:
        transformFromBelow && !trigerredAnimation
          ? "translateY(150%)"
          : "translateY(0%)",
      opacity: transformFromBelow && !trigerredAnimation ? 0 : 1,
      animation:
        trigerredAnimation && transformFromBelow
          ? `${styles.transformFromBelow} ${transformFromBelowAnimationDuration}s ease-out forwards`
          : "",
      justifyContent: textAlign,
      cursor: cursor,
    };
  }
  function line_1() {
    return {
      backgroundColor: underlineColor,
    };
  }
  function line_2() {
    return {
      width: breakLineFullWidth
        ? removeUnderlineAfterHover && !isHovered
          ? "0"
          : "200%"
        : removeUnderlineAfterHover && !isHovered
        ? "0"
        : "15%",
      backgroundColor: underlineColor,
    };
  }
  function lineContainer() {
    return {
      // animation: !displayAnimation && removeUnderlineAfterHover
      //     ? `${styles.removeUnderlineAnimation} 1.5s ease-in-out forwards`
      //     : "",
      animationDirection: "forwards",
      animationName: !displayAnimation
        ? removeUnderlineAfterHover
          ? `${styles.removeUnderlineAnimation}`
          : ``
        : `${styles.leftToRight}`,
      gap: `${lineGap}%`,
      animationDuration: isHovered
        ? `${underlineAnimationDuration}s`
        : `${removeUnderlineAnimationDuration}s`,
      // animationTimeingFunction: "cubic-bezier(0.77,0.0,0.175,1)",
    };
  }
  function flickerTextAnimation() {
    return {
      animationName: displayAnimation ? `${styles.flicker}` : ``,
    };
  }
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <a
      href={href ? href : undefined}
      onClick={(e: any) => {
        e.preventDefault();
        onClick();
      }}>
      <div
        ref={intersectinRef}
        style={profileHeaderContainer()}
        className={`${styles.profileHeaderContainer} ${className}`}
        onMouseEnter={() => {
          setIsHovered(true);
          if (!onHoverDisableAnimation) {
            setTimeout(() => setDisplayAnimation(false), 10);
            setTimeout(() => setDisplayAnimation(true), 20);
          }
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          if (!onHoverDisableAnimation) {
            setDisplayAnimation(false);
          }
        }}>
        <div className={styles.textContainer} style={profileHeading()}>
          {words.split(" ").map((ele: any, index: number) => (
            <span className={`${styles.profileHeading}`} key={index + ele}>
              {ele.split("").map((alphabet, idx) => {
                const animationTiming = Math.random();
                const animationDuration =
                  animationTiming / 5 > 0.15
                    ? animationTiming / 5 + 0.05
                    : animationTiming / 5 + 0.1;
                return (
                  <span
                    key={idx}
                    style={{
                      ...flickerTextAnimation(),
                      animationDuration: `${animationDuration}s`,
                      animationTimingFunction: "ease-out",
                      animationDelay: `${animationTiming / 5 + 0.1}s`,
                      animationIterationCount: animationIterationCount,
                      color: fontColor,
                    }}
                    className={`${textClassName} ${styles.text}`}>
                    {alphabet}
                  </span>
                );
              })}
              <span
                className={`${styles.textGap} ${
                  words.split(" ").length - 1 !== index &&
                  wordSpacingStyleClassName
                }`}>
                .
              </span>
              {/* <span className={`${styles.textGap} `}>{"\u00A0\u00A0"}</span> */}
            </span>
          ))}
        </div>
        {underline && (
          <div
            className={`${
              showLine === true
                ? styles.hideLineSuperContainer
                : styles.lineSuperContainer
            }`}>
            <span
              className={`${styles.lineContainer} ${underlineClassname}`}
              style={lineContainer()}>
              <span className={styles.line_1} style={line_1()}></span>
              <span className={styles.line_2} style={line_2()}></span>
            </span>
          </div>
        )}
      </div>
    </a>
  );
}
