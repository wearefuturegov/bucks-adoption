import React, { Component } from "react"
import "./style.scss"
import EveningCard from "../EveningCard"

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
    fetch("https://www.eventbriteapi.com/v3/users/me/events/?status=live&expand=venue&token=XQ2RUFERRGZ6ZTYCP6LK")
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

        <ol className="evening__grid" aria-live="polite">
          {!isLoading ? (
            evenings.map(evening => {
              const { id, name, url, start, end, venue } = evening;
              return (
                <EveningCard key={id} title={name.text} url={url} start={start} end={end} venue={venue} />
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </ol>
      </section>
      )
  }
}

export default EveningList;
