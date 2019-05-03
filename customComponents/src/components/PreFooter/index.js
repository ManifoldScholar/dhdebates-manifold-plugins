import React, { Component } from "react";
import "./styles.scss";
import thumbnail from "../../../assets/dhdebates_cover_thumb.jpg"
import Utility from "global/components/utility";
import chapters from "./chapters.json"

export default class PreFooter extends Component {
  constructor(props) {
    super(props);
    this.state = { chapter: chapters["01"]}
  }

  componentDidMount() {
    const randomChapter = this.getChapter();
    this.setState({ chapter: randomChapter})
  }

  getChapter() {
    const chapterKeys = Object.keys(chapters);
    const randomChapterKey = chapterKeys[Math.floor(Math.random() * chapterKeys.length)];
    return chapters[randomChapterKey];
  }

  render() {
    const baseClass= "custom-prefooter";
    const buttonClass = "action-callout-list";
    const { chapter } = this.state;

    return (
      <section className={`${baseClass} `} >
        <div className={`container ${baseClass}__flex-container`}>
          <figure className={`${baseClass}__figure`}>
            <img className={`${baseClass}__thumbnail`} alt="" src={thumbnail} />
          </figure>
          <div className="">
            <a className={`${baseClass}__header-link`} href={chapter.link}>
              <h4 className={`${baseClass}__heading heading-primary`}>{chapter.heading}</h4>
            </a>
            <div className="">
              <p className={`${baseClass}__body-text`}>{chapter.description}</p>
              <div className={`${buttonClass} ${buttonClass}--inline ${baseClass}__button-container`}>
                <a className={`${buttonClass}__button--primary ${buttonClass}__button`} href={chapter.link}>
                  <Utility.IconComposer icon="glasses64" size={46} iconClass={`${buttonClass}__button-icon`} />
                  <span className={`${buttonClass}__button-text`}>Read this Chapter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
