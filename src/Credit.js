import React, { Component } from 'react'
import Calculate from "./Calculate"
import Modal from "./Modal";

class Credit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calcItems: null,
      showItems: false,
      period: "year",
      visible: 'none'
    }

    this.creditCalc = this.creditCalc.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handlerClick = this.handlerClick.bind(this)
  }

  // Functions
  handleChange(e) {
    this.setState({ period: e.target.value })
  }

  creditCalc(e) {
    const creditSum = this._creditSum.value
    const yearRate = this._yearRate.value
    const creditTime = this._creditTime.value

    if (creditSum && yearRate && creditTime !== '') {
      const fullSum = ((creditSum / 100) * yearRate) * ( this.state.period === 'year' ? 12 : creditTime / 12)
      const costPerMonth = fullSum / ( this.state.period === 'year' ? creditTime * 12 : creditTime )
      const overpayment = fullSum - creditSum

      const calcItems = [
        { name: 'Полная сумма задолженности', cost: fullSum },
        { name: 'Сумма ежемесячного платежа', cost: costPerMonth },
        { name: 'Переплата по кредиту составляет', cost: overpayment }
      ]

      this.setState({
        calcItems,
        showItems: true,
        visible: 'block'
      })
    }

    e.preventDefault()
  }

  handlerClick() {
    this.setState({
      visible: 'none'
    })
  }

  // Render
  render() {
    let result = null
    if ( this.state.showItems ) {
      result = this.state.calcItems.map((item, index) => {
        return (
          <Calculate
            key={index}
            name={item.name}
            cost={item.cost}
          />
        )
      })
    }

    return (
      <div className="wrapper">
        <h1>Кредитный калькулятор</h1>
        <form
          className="form"
          onSubmit={this.creditCalc}
        >
          <label htmlFor="creditSum">Сумма кредита</label>
          <input
            ref={a => this._creditSum = a}
            id="creditSum"
            type="text"
            placeholder="Введите сумму кредита"
          />
          <label htmlFor="yearRate">Годовая ставка</label>
          <input
            ref={b => this._yearRate = b}
            id="yearRate"
            type="text"
            placeholder="Процентная ставка по кредиту"
          />
          <label htmlFor="creditTime">Срок кредитования</label>
          <div className="creditTime__select">
            <input
              ref={c => this._creditTime = c}
              id="creditTime"
              type="text"
              placeholder={
                this.state.period === 'year' ? "В годах" : "В месяцах"
              }
            />

            <select
              id="period"
              onChange={this.handleChange}
              value={this.state.period}
            >
              <option
                value="year"
              >год</option>
              <option
                value="month"
              >мес.</option>
            </select>
          </div>
          <button type="submit">Рассчитать</button>
        </form>
        <Modal
          visible={this.state.visible}
          handlerClick={this.handlerClick}
        >
          { result }
        </Modal>
      </div>
    )
  }
}

export default Credit