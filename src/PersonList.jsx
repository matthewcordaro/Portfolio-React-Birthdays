import Person from "./Person"

function PersonList({ people }) {
    return (
    <section>
      {people.map((person) => {
        return <Person key={person.id} {...person} />
      })}
    </section>
  )
}
export default PersonList
