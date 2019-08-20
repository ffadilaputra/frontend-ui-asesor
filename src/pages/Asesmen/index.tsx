import React, { Component, Fragment } from "react"
import { Header } from "semantic-ui-react"
import DataTable from "../../components/DataTable"
import ErrorMessage from "../../components/ErrorMessage"
import { AsesmenService } from "../../services/AsesmenService";

interface IState {
    asesmen: IAsesmen[]
    loading: boolean
    error?: Error
}

const fields: IField[] = [
    {
        name: "judul_elemen",
        label: "Judul Elemen",
    },
]

export default class Asesmen extends Component<{}, IState> {
    public state: IState = {
        asesmen: [],
        loading: false,
    }

    public asesmenService = new AsesmenService()

    public componentDidMount() {
        this.getAsesmen()
    }

    public getAsesmen() {
        this.setState({ loading: true })
        this.asesmenService
            .get()
            .then((asesmen) => this.setState({ asesmen }))
            .catch((error) => this.setState({ error }))
            .finally(() => this.setState({ loading: false }))
    }

    public createAsesmen(input: IAsesmen) {
        this.setState({ loading: true })
        this.asesmenService
            .create(input)
            .then(() => this.getAsesmen())
            .catch((error) => this.setState({ error, loading: false }))
    }

    public updateAsesmen(input: IAsesmen, id: string) {
        this.setState({ loading: true })
        this.asesmenService
            .update(input, id)
            .then(() => this.getAsesmen())
            .catch((error) => this.setState({ error, loading: false }))
    }

    public async deleteAsesmen(id: string) {
        this.setState({ loading: true })
        this.asesmenService
            .delete(id)
            .then(() => this.getAsesmen())
            .catch((error) => this.setState({ error, loading: false }))
    }

    public render() {
        return (
            <Fragment>
                <Header content="Asesi" subheader="Data Asesi anda" />
                <ErrorMessage
                    error={this.state.error}
                    onDismiss={() => this.setState({ error: undefined })}
                />
                <DataTable<IAsesmen>
                    data={this.state.asesmen}
                    loading={this.state.loading}
                    fields={fields}
                    onCreate={(input) => this.createAsesmen(input)}
                    onUpdate={(input) => this.updateAsesmen(input, input._id)}
                    onDelete={(input) => this.deleteAsesmen(input._id)}
                />
            </Fragment>
        )
    }
}
