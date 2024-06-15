import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron.jsx';
import { API_URL } from '../../config.js';
import CircularLoader from '../../components/common/loader/loader.jsx';

class Survey extends Component {
  state = {
    isLoading: true,
    data: null,
    update: null,
  };

  onChangeValue(event, id) {
    const apiUrl = `${API_URL}/servey/listings/${id}`;

    const doc = {
      choices: [
        {
          key: event.target.value,
        },
      ],
    };

    fetch(apiUrl, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(doc),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem(id, true);
        fetch(apiUrl)
          .then((res) => res.json())
          .then((data) => {
            this.setState({ data: data, isLoading: false, update: true });
          });
      });
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.setState({ id: id });
    const apiUrl = `${API_URL}/servey/listings/${id}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data: data, isLoading: false });
      });
  }

  render() {
    const items = [];

    if (!this.state.isLoading) {
      const disabled = !!localStorage.getItem(this.state.data._id);

      for (const [index, value] of this.state.data.choices.entries()) {
        const cal = `(${Math.round(
          ((value.vote || 0) * 100) / (this.state.data.totalVotes || 1)
        )}%)`;

        items.push(
          <li style={{ padding: '5px' }} key={index}>
            <span style={{ 'padding-right': '7px' }}>{value.key}</span>
            <input
              type="radio"
              disabled={disabled}
              value={value.key}
              name="group"
            />{' '}
            <span style={{ float: 'right' }}>
              {value.vote || 0} {cal}
            </span>
          </li>
        );
      }
    }

    return (
      <div style={{ minHeight: '700px' }}>
        <Jumbotron title="" subtitle="" />
        {this.state.isLoading ? (
          <div className="loader-container">
            <CircularLoader />
          </div>
        ) : (
          <div
            className="container"
            style={{ 'min-height': '400px', color: '#aaa' }}
          >
            <div className="row titleChoices" style={{ 'margin-left': '0.5%' }}>
              <div className="col-sm-12">
                <h2 style={{ 'font-size': 'larger', 'line-height': '29px' }}>
                  {' '}
                  {!this.state.isLoading ? this.state.data.title : null} (
                  {!this.state.isLoading ? this.state.data.totalVotes : null}{' '}
                  votes)
                </h2>
                <div
                  onChange={(e) => {
                    this.onChangeValue(e, this.state.data._id);
                  }}
                  className="choiceContainer"
                  style={{
                    position: 'static',
                    'list-style-type': 'decimal-leading-zero',
                    marginBottom: '25px',
                  }}
                >
                  {items}
                </div>
                {!this.state.isLoading ? (
                  localStorage.getItem(this.state.data._id) ? (
                    this.state.update ? (
                      <span>you voted successfully.</span>
                    ) : (
                      <span>you already voted.</span>
                    )
                  ) : null
                ) : null}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Survey;
