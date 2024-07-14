<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateFaqRequest;
use App\Models\Faq;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class FaqController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $faqs = Faq::with(['user:id,name'])
            ->where('festival_id', $request->user()->selected_festival)
            ->orderByDesc('updated_at')
            ->get();

        return Inertia::render('Festival/Faq/Index', [
            'faqs' => $faqs,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Festival/Faq/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if (Faq::where('question', $request->input('question'))->exists()) {
            return to_route('faqs.create')->with('message_error', "Faq {$request->input('question')} sudah tersedia");
        }

        $faq = Faq::create([
            'question' => $request->input('question'),
            'answer' => $request->input('answer'),
            'created_by' => $request->user()->id,
            'festival_id' => $request->user()->selected_festival,
        ]);

        return redirect()
            ->route('faqs.index')
            ->with('notification_success', 'Faq ' . Str::limit($faq->question, 20) . ' berhasil dibuat');
    }

    /**
     * Display the specified resource.
     */
    public function show(Faq $faq)
    {
        if (!$faq) {
            return to_route('faqs.index');
        }

        return Inertia::render('Festival/Faq/Show', [
            'faq' => $faq->load(['user:id,name']),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Faq $faq)
    {
        if (!$faq) {
            return to_route('faqs.index');
        }

        return Inertia::render('Festival/Faq/Edit', [
            'faq' => $faq->load(['user:id,name']),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Faq $faq)
    {
        if (Faq::where('question', $request->input('question'))->whereNot('id', $faq->id)->exists()) {
            return to_route('faqs.edit', ['faq' => $faq->id])->with('message_error', "Faq {$request->input('question')} sudah tersedia");
        }

        $faq = tap($faq)->update([
            'question' => $request->input('question'),
            'answer' => $request->input('answer'),
            'created_by' => $request->user()->id,
        ]);

        return redirect()
            ->route('faqs.show', ['faq' => $faq->id])
            ->with('notification_success', 'Faq ' . Str::limit($faq->question, 20) . ' berhasil diperbarui');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Faq $faq)
    {
        $faq->delete();

        return redirect()
            ->route('faqs.index')
            ->with('notification_info', 'Faq ' . Str::limit($faq->question, 20) . ' berhasil dihapus');
    }
}
