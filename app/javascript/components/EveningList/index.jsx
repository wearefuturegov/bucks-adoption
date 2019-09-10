import React, { Component } from "react"
import "./style.scss"
import EveningCard from "../EveningCard"
import loadingIcon from "./loading.svg"
import fetch from "isomorphic-unfetch"

const EveningList = ({
  events
}) =>
  <section className="evening-list">
    <div className="container">
      <ol className="evening__grid" aria-live="polite">
        {events.map(evening => {
          const { id, name, url, start, end, venue } = evening;
          return (
            <EveningCard key={id} title={name.text} url={url} start={start} end={end} venue={venue} />
          );
        })}
      </ol>
    </div>
  </section>

export default EveningList
