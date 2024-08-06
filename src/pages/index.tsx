"use client";
import ToggleButton from "@/component/Toggle/Toggle";
import Accordion from "../component/Accordion/Accordion";
import React, { useState } from "react";
import ColorPalette from "@/component/ColorPalette/ColorPalette";
import styles from "./index.module.scss";
import TwoColumnLayout from "@/component/Scroll/ScrollAnimi";
import LetterFly from "@/component/LetterFly/letterFly";
import Counter from '../component/ReactHooks/hooks'
export default function Home(): JSX.Element {
  const [selectedColor, setSelectedColor] = useState("");
  const [text, setText] = useState("");
  const [fontWeight, setFontWeight] = useState('bold');
  const handleColorSelect = (color: any) => {
    setSelectedColor(color);
  };
  const handleFontWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const weight = event.target.value;
    setFontWeight(weight);
  };
  const handleTextChange = (event: any) => {
    setText(event.target.value);
  };
  return (
    <React.Fragment>

      {/* <section>
      <TwoColumnLayout>
    </TwoColumnLayout>
      </section> */}

      {/* <section>
        <LetterFly count={10}/>
      </section> */}
      <Counter/>
      {/* <section>
        <Accordion
          title={"Section 1"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
        />
        <Accordion
          title={"Section 2"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
        />
        <Accordion
          title={"Section 3"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
        />
      </section>

      <section>
        <ToggleButton />
      </section>

      <section className={styles.pageContainer}>
        <h1>Select a Color</h1>
        <ColorPalette onSelect={handleColorSelect} />
        <input
          type="Hi"
          value={text}
          onChange={handleTextChange}
          style={{ color: selectedColor, fontWeight: fontWeight }}
        />
      </section> */}
    </React.Fragment>
  );
}
