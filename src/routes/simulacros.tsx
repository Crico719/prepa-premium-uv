import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AlertTriangle, CheckCircle2, ChevronLeft, ChevronRight, Clock, History, Trophy, XCircle } from "lucide-react";
import { SectionHeader, Surface } from "@/components/kit";
import { exams, type Exam, type ExamQuestion } from "@/lib/exam-data";

export const Route = createFileRoute("/simulacros")({
  head: () => ({
    meta: [
      { title: "Simulacros | Prepa Premium UV" },
      { name: "description", content: "Practica con examenes reales de admision" },
    ],
  }),
  component: Simulacros,
});

type AnswerState = {
  questionId: number;
  selectedIndex: number;
  isCorrect: boolean;
};

function Simulacros() {
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<AnswerState[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(0);

  const exam = selectedExam || exams[0]!;
  const questions = exam.questions;
  const question = questions[currentQ]!;
  const totalCorrect = answers.filter((a) => a.isCorrect).length;
  const totalAnswered = answers.length;

  const startExam = (e: Exam) => {
    setSelectedExam(e);
    setCurrentQ(0);
    setAnswers([]);
    setShowResult(false);
    setTimer(0);
  };

  const selectAnswer = (optionIndex: number) => {
    const existing = answers.find((a) => a.questionId === question.id);
    if (existing) return;
    setAnswers([
      ...answers,
      { questionId: question.id, selectedIndex: optionIndex, isCorrect: optionIndex === question.correctIndex },
    ]);
  };

  const goNext = () => {
    if (currentQ < questions.length - 1) setCurrentQ(currentQ + 1);
  };

  const goPrev = () => {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  };

  const finishExam = () => {
    setShowResult(true);
  };

  const restart = () => {
    setSelectedExam(null);
    setCurrentQ(0);
    setAnswers([]);
    setShowResult(false);
  };

  const answered = answers.find((a) => a.questionId === question.id);
  const percentage = totalAnswered > 0 ? Math.round((totalCorrect / questions.length) * 100) : 0;

  if (showResult) {
    return (
      <div className="space-y-6">
        <SectionHeader title="Resultado del simulacro" subtitle={exam.name} />

        <Surface className="flex flex-col items-center gap-4 text-center">
          <div className="rounded-full bg-primary/10 p-6">
            <Trophy className="h-12 w-12 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">{percentage}%</h2>
          <p className="text-muted-foreground">
            {totalCorrect} de {questions.length} correctas
          </p>
          <div className="flex gap-6 text-sm">
            <div className="flex items-center gap-1 text-green-600">
              <CheckCircle2 className="h-4 w-4" />
              {totalCorrect} correctas
            </div>
            <div className="flex items-center gap-1 text-red-500">
              <XCircle className="h-4 w-4" />
              {totalAnswered - totalCorrect} incorrectas
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <AlertTriangle className="h-4 w-4" />
              {questions.length - totalAnswered} sin responder
            </div>
          </div>
          <button
            onClick={restart}
            className="mt-4 min-h-11 rounded-[18px] bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Volver a elegir examen
          </button>
        </Surface>

        <section className="space-y-3">
          <h3 className="text-lg font-semibold">Revision de respuestas</h3>
          {questions.map((q) => {
            const a = answers.find((x) => x.questionId === q.id);
            return (
              <Surface key={q.id} className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold">
                    {q.id}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">{q.question}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{q.subject}</p>
                  </div>
                  {a ? (
                    a.isCorrect ? (
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 shrink-0 text-red-500" />
                    )
                  ) : (
                    <AlertTriangle className="h-5 w-5 shrink-0 text-yellow-500" />
                  )}
                </div>
                {a && !a.isCorrect && (
                  <div className="ml-8 rounded-xl bg-green-50 p-3 text-xs dark:bg-green-950">
                    <p className="font-semibold text-green-700 dark:text-green-300">
                      Correcta: {q.options[q.correctIndex]}
                    </p>
                    <p className="mt-1 text-green-600 dark:text-green-400">{q.explanation}</p>
                  </div>
                )}
                {!a && (
                  <div className="ml-8 rounded-xl bg-yellow-50 p-3 text-xs dark:bg-yellow-950">
                    <p className="font-semibold text-yellow-700 dark:text-yellow-300">Sin respuesta</p>
                    <p className="mt-1 text-yellow-600 dark:text-yellow-400">
                      Correcta: {q.options[q.correctIndex]}
                    </p>
                    <p className="mt-1 text-yellow-600 dark:text-yellow-400">{q.explanation}</p>
                  </div>
                )}
              </Surface>
            );
          })}
        </section>
      </div>
    );
  }

  if (!selectedExam) {
    return (
      <div className="space-y-8">
        <SectionHeader title="Simulacros" subtitle="Elige un examen para practicar" />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <div className="flex items-center gap-3 rounded-2xl border border-border p-4">
            <Clock className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-semibold">50 preguntas</p>
              <p className="text-xs text-muted-foreground">Tiempo estimado: 90 minutos</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-border p-4">
            <History className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-semibold">1 examen disponible</p>
              <p className="text-xs text-muted-foreground">UNCP 2023-II</p>
            </div>
          </div>
        </div>

        <ul className="grid gap-4 md:grid-cols-2">
          {exams.map((e) => (
            <li key={e.id}>
              <Surface className="hover-lift flex h-full flex-col gap-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-semibold">{e.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {e.questions.length} preguntas · {e.university}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {[...new Set(e.questions.map((q) => q.subject))].slice(0, 5).map((s) => (
                    <span key={s} className="rounded-full bg-muted px-2 py-1">
                      {s}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => startExam(e)}
                  className="press mt-auto min-h-11 rounded-[18px] bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  Comenzar simulacro
                </button>
              </Surface>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <button onClick={restart} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ChevronLeft className="h-4 w-4" />
          Volver
        </button>
        <div className="flex items-center gap-3 text-sm">
          <span className="font-semibold">
            {currentQ + 1}/{questions.length}
          </span>
          <span className="text-muted-foreground">
            {totalCorrect} correctas
          </span>
        </div>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
        />
      </div>

      <Surface className="space-y-4">
        <div className="flex items-start gap-2">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
            {question.id}
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium text-muted-foreground">{question.subject}</p>
            <p className="mt-1 text-sm font-medium leading-relaxed">{question.question}</p>
          </div>
        </div>

        <div className="space-y-2 pt-2">
          {question.options.map((opt, i) => {
            const isSelected = answered?.selectedIndex === i;
            const isCorrectOption = i === question.correctIndex;
            const hasAnswered = !!answered;

            let optClass = "border-border hover:border-primary/50 hover:bg-primary/5";
            if (hasAnswered && isCorrectOption) optClass = "border-green-500 bg-green-50 dark:bg-green-950";
            if (hasAnswered && isSelected && !isCorrectOption) optClass = "border-red-500 bg-red-50 dark:bg-red-950";

            return (
              <button
                key={i}
                onClick={() => selectAnswer(i)}
                disabled={hasAnswered}
                className={`w-full rounded-2xl border p-3 text-left text-sm transition-all ${optClass}`}
              >
                <span className="mr-2 font-bold text-muted-foreground">{String.fromCharCode(65 + i)}.</span>
                {opt}
              </button>
            );
          })}
        </div>

        {answered && (
          <div className={`rounded-2xl p-4 text-sm ${answered.isCorrect ? "bg-green-50 dark:bg-green-950" : "bg-red-50 dark:bg-red-950"}`}>
            <p className={`font-semibold ${answered.isCorrect ? "text-green-700 dark:text-green-300" : "text-red-700 dark:text-red-300"}`}>
              {answered.isCorrect ? "Correcto!" : "Incorrecto"}
            </p>
            {!answered.isCorrect && (
              <p className="mt-1 text-xs text-muted-foreground">
                Respuesta correcta: {question.options[question.correctIndex]}
              </p>
            )}
            <p className="mt-2 text-xs text-muted-foreground">{question.explanation}</p>
          </div>
        )}
      </Surface>

      <div className="flex items-center justify-between gap-3">
        <button
          onClick={goPrev}
          disabled={currentQ === 0}
          className="flex items-center gap-1 rounded-2xl border border-border px-4 py-2 text-sm font-medium disabled:opacity-40"
        >
          <ChevronLeft className="h-4 w-4" />
          Anterior
        </button>

        <div className="flex gap-2">
          {currentQ === questions.length - 1 ? (
            <button
              onClick={finishExam}
              className="press min-h-10 rounded-[18px] bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Finalizar
            </button>
          ) : (
            <button
              onClick={goNext}
              className="press flex items-center gap-1 min-h-10 rounded-[18px] bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Siguiente
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
