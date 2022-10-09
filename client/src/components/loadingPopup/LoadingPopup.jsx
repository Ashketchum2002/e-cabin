
import "./loadingpopup.css"


export default function LoadingPopup(props) {
  return (
        <div className={props.loading == 1 ? "popupOuter" : "popupOuter dropPopup"}>
            <div className="popupInner">Loading....</div>
        </div>
  )
}
