import React, { Component } from "react"
import "./style.scss"
import EveningCard from "../EveningCard"
import loadingIcon from "./loading.svg"

class EveningList extends Component {
  constructor() {
    super();
    this.state = {
      evenings: [],
      isLoading: true,
      error: null
    }
  }

  componentDidMount() {
    this.fetchEvenings();
  }

  fetchEvenings() {
    fetch("https://www.eventbriteapi.com/v3/users/me/events/?status=live&expand=venue&token=" + process.env.eventbrite_secret)
    .then(results => results.json())
    .then(data =>
      this.setState({
        evenings: data.events,
        isLoading: false,
      })
    )
    .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { isLoading, evenings, error } = this.state;
    return(
      <section className="evening-list">
        {error ? <p>{error.message}</p> : null}

        {!isLoading ? (
          <ol className="evening__grid" aria-live="polite">
            {evenings.map(evening => {
              const { id, name, url, start, end, venue } = evening;
              return (
                <EveningCard key={id} title={name.text} url={url} start={start} end={end} venue={venue} />
              );
            })}
          </ol>
          ) : (
            <img className="evening-grid__loader" src={loadingIcon} alt="Loading..."/>
          )}
      </section>
      )
  }
}

export default EveningList;
