import { ejwt, ejtheta, angletheta, yhat, plaintheta, yphasor } from '../../constants/expressions';

export const PageType = {
    PARAGRAPH: "PARAGRAPH",
    LIST: "LIST",
    EULER_PAGE: "EULER",
}

export type contentType = {
    text: string;
    subLink?: string;
    equation?: string;
}

export type TutorialPageType = {
    title: string;
    subTitle: string;
    type: string;
    content: Array<contentType>;
    subType?: string;
}

export type TutorialPageArrayType = Array<TutorialPageType>

export const TutorialPage: TutorialPageArrayType = [
    {
        title: "What is a phasor?",
        subTitle: "Simply a complex number",
        type: PageType.PARAGRAPH,
        content: [
            { 
                text: "A phasor is a complex number that represents the magnitude and phase of a sinusoid. It is the transformed version of a sinusoidal voltage or current waveform.",
            },
        ],
    },
    {
        title: "It\'s a what",
        subTitle: "",
        type: PageType.PARAGRAPH,
        content: [
            {
                text: "It\'s a transformation, right? Phasors transform sinusoidal function problems from the time domain to the frequency domain.",
            },
        ],
    },
    {
        title: "How does one write a phasor?",
        subTitle: "Four easy steps",
        type: PageType.LIST,
        subType: PageType.EULER_PAGE,
        content: [
            {
                text: `Write y(t) in the time domain as a cosine waveform with a phase angle, ${plaintheta}`,
                equation: "y(t)=Y_m \cos(omega t + theta)",
            },
            {
                text: "Using Euler\'s formula, write y(t) as the real part of the complex quantity. ",
                // Note if the sub value exists then clicking on this goes to next step where not 
                // not clicking on the sub skips the next page. 
                subLink: "Review Euler",
                equation: "y(t) = Re{Y_m e^(j( omega t + theta))} = Re{Y_m e^(j omega t) e^(j theta)}",
            },
            {
                text: `Define a phasor as ${yphasor} and therefore`,
                equation: "y(t) = Re{\hat{Y}_m e^(j omega t)}",
            },
            {
                text: `A phasor is a shorthand notation to represent the magnitude and phase of a sinusoid`,
                equation: "\hat{Y}_m = Y_m e^(j theta)"
            }
        ],
    },
    {
        title: "Special Notes",
        subTitle: "Simply a complex number",
        type: PageType.PARAGRAPH,
        content: [
            { 
                text: "Since steps 2 and 3 are simple, you might be able to do them in your head.",
            },
            { 
                text: `*Remember: Although ${ejwt} is dropped, we are still in the frequency domain. Phasor notation just transforms problems from time domain to frequency domain.`,
            },
            { 
                text: `A phasor is a complex number that represents the magnitude and phase of a sinusoid. So, <span class='tutorial-page-content-highlight'> why call it a phasor and not a vector?</span> A phasor is time based (think of how the sinusoid waveform changes with time), whereas a vector is space based (think of the distance between points in space)`,
            },
            { 
                text: `A phasor may be expressed in exponential form, C ${ejtheta}, polar form(C${angletheta}), or rectangular form (a + jb)`,
            },
            { 
                text: 'Following is a sample problem',
            },
        ],
    },
    {
        title: "Sample Problem",
        type: PageType.PARAGRAPH,
        subTitle: '',
        content: [
            { 
                text: "Write the phasor notation for:",
            },
            { 
                text: `i(t) = 5 sin (100t + 120&deg)`,
            },
            { 
                text: 'Please take the time to work this problem.',
            },
        ],
    },
    {
        title: "Solution to sample problem",
        subTitle: "",
        type: PageType.LIST,
        content: [
            {
                text: `Express the current as a cosine waveform`,
                equation: "i(t)=5 \cos(100 t + 30^(\circ))",
            },
            {
                text: "Now express current as the real part of a complex quantity",
                equation: "i(t) = Re{5 e^(j( 100 t + 30^(\circ)))} = Re{5 e^(j 100 t) e^(j30^(\circ))}",
            },
            {
                text: `Use phasor notation to represent the magnitude and phase`,
                equation: "i(t) = Re{\hat{I} e^(j 100 t)}",
            },
            {
                text: `The phasor as a standalone quantity:`,
                equation: "\hat{I} = 5 e^(j 30^(\circ)) = 5\angle 30^(\circ)"
            }
        ],
    },
]