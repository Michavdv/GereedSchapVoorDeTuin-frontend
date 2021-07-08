export default ({ store, $config }: any, inject: any) => {
  // Fetch data from an 'endpoint' in Strapi into a local 'state'
  const getData = async function (state: string, endpoint: string) {
    const data = await fetch(`${$config.backendUrl}/${endpoint}`)
      .then()
      .then((res) => res.json())
    store.commit(state, data)
    return true
  }
  inject('getData', getData)
}
