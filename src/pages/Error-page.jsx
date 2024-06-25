import { useRouteError } from "react-router-dom";
import '../styles/error-page.css';


export default function ErrorPage() {
    //const error = useRouteError();
    //console.error(error);

    return (
        <>
        <div className="body-error-p">
            <div class="mainbox">
                <div class="err">4</div>
                <i class="far fa-question-circle fa-spin"></i>
                <div class="err2">4</div>
                <div class="msg">¿Tal vez esta página se movió? ¿Eliminó? O quizás nunca existió.<p>Volvamos a <a href="/">home</a> e intentemos desde allá</p></div>
            </div>
        </div>
        </>

    );
}