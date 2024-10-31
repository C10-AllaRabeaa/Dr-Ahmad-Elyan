import React from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPrint } from '@fortawesome/free-solid-svg-icons';
import "./style.css";

function Irshadat2() {
    const navigate = useNavigate();

    const handlePrint = () => {
        window.print();
    };

    return (
        <div>
            <div dir="rtl" className="about-container">
                <h1>ارشادات علاجية من الأسبوع الثاني :</h1>
                <ol>
                    <ul>
                        <li>يجب استخدام اللاصق الشفاف ابتداءً من الأسبوع الثاني يومياً أثناء النوم لمدة 3 أشهر وإزالته عند الإستيقاظ بغسله بالماء .</li>
                        <li>في بعض الأوقات الجبيرة تتحرك على الأنف ويجب ضغطها .</li>
                        <li>يوجد خيوط داخل الأنف وفي حال بروزها من الأنف يجب عدم شدها .</li>
                        <li>يجب استخدام المحلول الملحي لتنظيف الأنف ويتبعه بخاخ ومن ثم كريم المضاد الحيوي على الغرز ثلاث مرات يومياً لحين موعد زيارة الطبيب .</li>
                    </ul>
                </ol>
                <div>
                    <h1>ارشادات عامة :</h1>
                    <ol>
                        <ul>
                            <li>يسمح بتناول جميع أنواع المأكولات  والمشروبات . </li>
                            <li>يفضل النوم على الظهر ويمكن أحياناً على جنب بدون الضغط على الأنف .</li>
                            <li>يسمح بالصلاة على الكرسي لمدة ثلاث أسابيع وعدم الإنحناء لفترة طويلة .</li>
                            <li>بالنسبة للإستحمام يتم غسل الشعر منفصل عن الجسم كما في الصالونات في أول أسبوع (مع وجود الجبيرة ) ومن ثم تعود للإستحمام بطريقة عادية .</li>
                            <li>يمنع استخدام نظارة النظر والنظارة الشمسية لمدة ستة أسابيع .</li>
                            <li>تجنب رفع الأثقال والرياضة الشاقة لمدة ستة أسابيع .</li>
                            <li>الرجاء عدم عمل تان أو حمام مغربي- البخار - لمدة ستة أسابيع .</li>
                            <li>يفضل عدم التعرض لأشعة الشمس المباشرة لفترة طويلة .</li>
                            <li>يجب عدم استخدام حبوب الـ Roaccutane لعلاج البشرة قبل أو بعد العملية بشهر .</li>
                            <li>يجب عدم وضع المكياج والكريمات المرطبة للبشرة بعد اسبوع من العملية .</li>
                            <li>يجب عدم عمل تقويم الأسنان والتركبيات بعد شهر من العملية .</li>
                            <li>بالنسبة لفيلر الشفاه والخدود وليزر الوجه وتنظيف البشرة والتقشير بعد شهرين من العملية .</li>
                            <li>يفضل التقليل من التدخين - أرجيلة والسيجارة الإلكترونية لمدة شهر .</li>
                            <li>لا مانع من استخدام العطور والبخور حيث أنه لا يؤثر على نتيجة العملية إذا لم يكن هناك حساسية .</li>
                            <li>عند موعد فك الجبيرة يتم إزالة الدعامات الداخلية والخيوط الخارجية</li>
                        </ul>
                    </ol>
                </div>
                <div dir="ltr">
                <button className="btn-back" onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>

                <button className="btn-print" onClick={handlePrint}>
                    <FontAwesomeIcon icon={faPrint} /> Print
                </button>
            </div>
            </div>
        </div>
    )
}

export default Irshadat2;


