// StreamingTable.js
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import styles from './TestRetro.module.css';

const TestRetro = () => {

    const testNodes = [
        // { title: 'Introducción a la Sintaxis de Python', completed: Math.random() >= 0.5 },
        { title: 'Variables y Tipos de Datos', completed: Math.random() >= 0.5 },
        { title: 'Operadores y Expresiones', completed: Math.random() >= 0.5 },
        { title: 'Estructuras de Control de Flujo', completed: Math.random() >= 0.5 },
        { title: 'Funciones en Python', completed: Math.random() >= 0.5 },
        { title: 'Errores y Manejo de Excepciones', completed: Math.random() >= 0.5 },
        { title: 'Buenas Prácticas y Reglas de Estilo', completed: Math.random() >= 0.5 }
    ];

    const feedbackMessages = [
        {
            good: "Has demostrado un buen dominio en los temas: ",
            bad: "pero sería útil reforzar tu conocimiento en: "
        },
        {
            good: "Buen trabajo en ",
            bad: "Aunque, aún tienes algunas áreas para mejorar en: "
        },
        {
            good: "Vas muy bien en ",
            bad: "sin embargo, sería beneficioso repasar un poco más los siguientes temas: ",
        },
        {
            good: "Mostraste resultados solidos en: ",
            bad: "pero considera dedicar más tiempo a revisar: ",
        },
        {
            good: "¡Impresionante! Parece que tienes bajo control los temas: ",
            bad: "pero aún puedes mejorar en: ",
        },
        {
            good: "Vas avanzando bien en ",
            bad: "aunque notarás mejorías con más práctica en: ",
        },
        {
            good: "Estás mostrando gran avance en ",
            bad: "sin embargo, dedicar más tiempo a los temas: ",
        },
        {
            good: "Tienes claros los temas: ",
            bad: "Solo falta fortalecer un poco más los temas de: ",
        },
        {
            good: "Felicidades, ¡vas bien en ",
            bad: "Te sugiero un repaso adicional en: ",
        },
        {
            good: "¡Buen trabajo en ",
            bad: "Te ayudará reforzar un poco más los temas: ",
        },
        // "Has demostrado un buen dominio en los temas: {temas_buenos}, pero sería útil reforzar tu conocimiento en: {temas_pendientes}.",
        // "Vas muy bien en {temas_buenos}; sin embargo, sería beneficioso repasar un poco más los siguientes temas: {temas_pendientes}.",
        // "Buen trabajo en {temas_buenos}! Aunque, aún tienes algunas áreas para mejorar en: {temas_pendientes}.",
        // "Tus resultados en {temas_buenos} son sólidos, pero considera dedicar más tiempo a revisar: {temas_pendientes}.",
        // "¡Impresionante! Los temas {temas_buenos} parecen estar bajo control, pero aún puedes mejorar en: {temas_pendientes}.",
        // "Vas avanzando bien en {temas_buenos}, aunque notarás mejorías con más práctica en: {temas_pendientes}.",
        // "Estás mostrando gran avance en {temas_buenos}; sin embargo, dedicar más tiempo a los temas: {temas_pendientes} te beneficiará.",
        // "Los temas {temas_buenos} parecen claros para ti. Solo falta fortalecer un poco más los temas de: {temas_pendientes}.",
        // "Felicidades, ¡vas bien en {temas_buenos}! Te sugiero un repaso adicional en: {temas_pendientes}.",
        // "¡Buen trabajo en {temas_buenos}! Te ayudará reforzar un poco más los temas: {temas_pendientes}."
    ];

    const [text, setText] = useState('');
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    // Manejador de cambio de texto para activar el efecto
    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setText(e.target.value);
    //     setIndex(0); // Reinicia el índice para empezar el efecto de streaming
    // };

    const personalizedFeedbackMessages = () => {
        const message = feedbackMessages[Math.floor(Math.random() * feedbackMessages.length)];
        let temas_buenos = ""
        let temas_pendientes = ""
        const completedNodes = testNodes.filter((node) => node.completed);
        const uncompletedNodes = testNodes.filter((node) => !node.completed);
        completedNodes.forEach((node) => {
            temas_buenos += `
- ${node.title}  `
        })
        temas_buenos += `

        `
        uncompletedNodes.forEach((node) => {
            temas_pendientes += `
- ${node.title}  `
        })
        const personalizedMessage = `
${message.good} 
${temas_buenos}
${message.bad}
${temas_pendientes}
        `
        setText(personalizedMessage);
    };

    // Usa un efecto para actualizar el texto letra por letra
    useEffect(() => {
        if (displayedText.length < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex(index + 1);
            }, 5); // Cambia el intervalo para ajustar la velocidad
            return () => clearTimeout(timeout);
        } else {
            setDisplayedText(text); // Asegura que el texto completo aparezca al final
        }
    }, [index, text]);

    useEffect(() => {
        personalizedFeedbackMessages();
    }, []);

    return (
        <div className={styles.tableContainer}>
            <div className={styles.table}>
                <ReactMarkdown className={styles.markdown}>
                    {displayedText}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default TestRetro;
