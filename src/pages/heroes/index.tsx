import { Hero } from "@app/models/Hero"
import { IApplicationState, IConnectedReduxProps } from "@app/store";
import { fetchRequest } from "@app/store/heroes/actions";
import * as React from 'react'
import { connect } from 'react-redux'

interface IPropsFromState {
  loading: boolean
  data: Hero[]
  errors?: string
}

interface IPropsFromDispatch {
  fetchRequest: typeof fetchRequest
}

type AllProps = IPropsFromState & IPropsFromDispatch & IConnectedReduxProps

class HeroesIndexPage extends React.Component<AllProps> {
  public componentDidMount() {
    this.props.fetchRequest()
  }

  public render() {
    const { loading, data } = this.props

    if (loading) {
      return <h1> Loading </h1>
    } else {
      return (
        <ul>
          {data.map((hero, index) => <li key={index}>{hero.name}</li>)}
        </ul>
      )
    }
  }
}

const mapStateToProps = ({ heroes }: IApplicationState) => ({
  data: heroes.data,
  errors: heroes.errors,
  loading: heroes.loading
})

const mapDispatchToProps = {
  fetchRequest
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroesIndexPage)
