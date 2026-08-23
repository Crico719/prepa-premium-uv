import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Lightbulb,
  RefreshCw,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";
import { IconTile, Pill, ProgressBar, SectionHeader, Surface } from "@/components/kit";
import {
  testQuestions,
  careerAreas,
  type CareerArea,
} from "@/lib/vocational-test";

export const Route = createFileRoute("/test-vocacional")({
  head: () => ({
    meta: [
      { title: "Test vocacional | Rumbo" },
      {
        name: "description",
        content: "Descubre qué carreras universitarias encajan con tus intereses y fortalezas. 15 preguntas, 5 minutos.",
      },
    ],
  }),
  component: TestVocacional,
});

type Scores = Record<string, number>;

function calculateResults(answers: number[]): { area: CareerArea; score: number; pct: number }[] {
  const scores: Scores = {};
  careerAreas.forEach((a) => (scores[a.id] = 0));

  answers.forEach((optionIdx, qIdx) => {
    const question = testQuestions[qIdx];
    if (!question) return;
    const option = question.options[optionIdx];
    if (!option) return;
    Object.entries(option.scores).forEach(([area, pts]) => {
      scores[area] = (scores[area] || 0) + pts;
    });
  });

  const maxPossible = testQuestions.length * 3;
  const results = careerAreas
    .map((area) => ({
      area,
      score: scores[area.id] || 0,
      pct: Math.round(((scores[area.id] || 0) / maxPossible) * 100),
    }))
    .sort((a, b) => b.score - a.score);

  return results;
}

function TestVocacional() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    () => new Array(testQuestions.length).fill(null)
  );
  const [finished, setFinished] = useState(false);

  const question = testQuestions[currentQ];
  const progress = ((currentQ + 1) / testQuestions.length) * 100;
  const answered = answers[currentQ] !== null;

  const selectOption = (idx: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = idx;
    setAnswers(newAnswers);
  };

  const goNext = () => {
    if (currentQ < testQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setFinished(true);
    }
  };

  const goPrev = () => {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  };

  const restart = () => {
    setAnswers(new Array(testQuestions.length).fill(null));
    setCurrentQ(0);
    setFinished(false);
  };

  const results = useMemo(() => {
    if (!finished) return [];
    return calculateResults(answers as number[]);
  }, [finished, answers]);

  const topThree = results.slice(0, 3);

  if (finished) {
    return (
      <div className="space-y-8">
        <SectionHeader
          title="Tu resultado vocacional"
          subtitle={`${testQuestions.length} preguntas respondidas`}
        />

        <Surface className="border-none bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="flex items-center gap-4">
            <div className="grid size-16 place-items-center rounded-full bg-white/20">
              <Trophy className="size-8" />
            </div>
            <div>
              <p className="text-sm opacity-90">Tu perfil vocacional es</p>
              <h2 className="text-2xl font-bold">{topThree[0]?.area.name || "—"}</h2>
              <p className="mt-1 text-sm opacity-80">{topThree[0]?.area.description}</p>
            </div>
          </div>
        </Surface>

        <div className="grid gap-4 md:grid-cols-3">
          {topThree.map((r, i) => (
            <Surface
              key={r.area.id}
              className={`flex flex-col gap-3 ${i === 0 ? "ring-2 ring-primary" : ""}`}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{r.area.icon}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{r.area.name}</h3>
                    {i === 0 && <Pill tone="success">Mejor match</Pill>}
                  </div>
                  <p className="text-xs text-muted-foreground">{r.pct}% compatibilidad</p>
                </div>
              </div>
              <ProgressBar value={r.pct} tone={i === 0 ? "success" : i === 1 ? "primary" : "warning"} />
              <div>
                <p className="mb-1 text-xs font-semibold text-muted-foreground">Carreras sugeridas:</p>
                <div className="flex flex-wrap gap-1">
                  {r.area.careers.slice(0, 5).map((c) => (
                    <span key={c} className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold text-muted-foreground">Habilidades clave:</p>
                <div className="flex flex-wrap gap-1">
                  {r.area.skills.map((s) => (
                    <span key={s} className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Surface>
          ))}
        </div>

        <Surface>
          <SectionHeader title="Todos tus resultados" subtitle="Porcentaje de compatibilidad por área" />
          <div className="space-y-3">
            {results.map((r) => (
              <div key={r.area.id} className="flex items-center gap-3">
                <span className="text-xl">{r.area.icon}</span>
                <span className="min-w-0 flex-1 text-sm font-medium">{r.area.name}</span>
                <div className="w-32">
                  <ProgressBar value={r.pct} />
                </div>
                <span className="w-10 text-right text-sm font-bold">{r.pct}%</span>
              </div>
            ))}
          </div>
        </Surface>

        <Surface>
          <SectionHeader
            title="Siguiente paso"
            subtitle="Usa tu resultado para elegir tus cursos"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {topThree.slice(0, 2).map((r) => (
              <div key={r.area.id} className="rounded-[14px] border border-border p-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{r.area.icon}</span>
                  <span className="font-semibold">{r.area.name}</span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{r.area.description}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {r.area.careers.slice(0, 3).map((c) => (
                    <Pill key={c} tone="primary">{c}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Surface>

        <div className="flex justify-center">
          <button
            type="button"
            onClick={restart}
            className="press flex min-h-11 items-center gap-2 rounded-[18px] border border-border px-6 text-sm font-semibold hover:bg-muted"
          >
            <RefreshCw className="size-4" /> Volver a hacer el test
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <SectionHeader
        title="Test vocacional"
        subtitle={`Pregunta ${currentQ + 1} de ${testQuestions.length}`}
      />

      <div className="flex items-center gap-3">
        <ProgressBar value={progress} className="flex-1" />
        <span className="text-xs font-semibold text-muted-foreground">{Math.round(progress)}%</span>
      </div>

      <Surface className="space-y-6">
        <div className="flex items-start gap-3">
          <div className="grid size-10 shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-bold text-primary">
            {currentQ + 1}
          </div>
          <h2 className="text-lg font-semibold leading-snug">{question.question}</h2>
        </div>

        <div className="space-y-3">
          {question.options.map((opt, idx) => {
            const selected = answers[currentQ] === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => selectOption(idx)}
                className={`press flex w-full items-center gap-3 rounded-[16px] border px-5 py-4 text-left text-sm transition-all ${
                  selected
                    ? "border-primary bg-primary/5 ring-2 ring-primary"
                    : "border-border hover:border-primary/40 hover:bg-muted"
                }`}
              >
                <span
                  className={`grid size-8 shrink-0 place-items-center rounded-full border text-xs font-bold transition-colors ${
                    selected
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border"
                  }`}
                >
                  {selected ? <CheckCircle2 className="size-4" /> : String.fromCharCode(65 + idx)}
                </span>
                <span className="flex-1">{opt.text}</span>
              </button>
            );
          })}
        </div>
      </Surface>

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={goPrev}
          disabled={currentQ === 0}
          className="press flex min-h-11 items-center gap-2 rounded-[18px] border border-border px-5 text-sm font-semibold disabled:opacity-40 hover:bg-muted"
        >
          <ArrowLeft className="size-4" /> Anterior
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={!answered}
          className="press flex min-h-11 items-center gap-2 rounded-[18px] bg-primary px-6 text-sm font-semibold text-primary-foreground disabled:opacity-40 hover:bg-primary/90"
        >
          {currentQ === testQuestions.length - 1 ? (
            <>
              <Sparkles className="size-4" /> Ver resultado
            </>
          ) : (
            <>
              Siguiente <ArrowRight className="size-4" />
            </>
          )}
        </button>
      </div>

      <Surface className="border-l-4 border-l-primary">
        <div className="flex items-start gap-2">
          <Lightbulb className="mt-0.5 size-4 shrink-0 text-primary" />
          <p className="text-xs text-muted-foreground">
            No hay respuestas correctas ni incorrectas. Responde con lo que más te guste o te atraiga.
            El test identifica tus intereses y los relaciona con áreas de estudio.
          </p>
        </div>
      </Surface>
    </div>
  );
}
