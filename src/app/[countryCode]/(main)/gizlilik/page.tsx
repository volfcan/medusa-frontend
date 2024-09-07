import { gridItems } from "data"

const Gizlilik = () => (
  <>
    <div className="m-36">
      <div className="text-2xl-semi">Gizlilik Sözleşmesi</div>
      {gridItems.map((item, index) => (
        <div className="flex gap-x-2" key={index}>
          {item.id}.<div>{item.title}</div>
        </div>
      ))}
    </div>
  </>
)
export default Gizlilik
