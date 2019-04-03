import PageHeader from './PageHeader'

const PageLayout = props => (
  <div >
    <PageHeader />
    {props.children}
  </div>
)

export default PageLayout