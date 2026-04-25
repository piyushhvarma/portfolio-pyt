"use client";

import { useEffect, useState } from "react";
import { ArrowBigUp, ArrowBigDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function VotingWidget() {
  const [upvotes, setUpvotes] = useState<number>(0);
  const [downvotes, setDownvotes] = useState<number>(0);
  const [voted, setVoted] = useState<'up' | 'down' | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Basic sync
    setIsAdmin(localStorage.getItem('portfolio_admin') === 'true');

    // Fetch initial accurate count from KV securely
    fetch('/api/vote')
      .then(res => res.json())
      .then(data => {
        if(data && typeof data.upvotes !== 'undefined') setUpvotes(parseInt(data.upvotes));
        if(data && typeof data.downvotes !== 'undefined') setDownvotes(parseInt(data.downvotes));
      })
      .finally(() => setIsLoading(false));

    // Listen for hidden trigger event internally
    const listenStorage = () => setIsAdmin(localStorage.getItem('portfolio_admin') === 'true');
    window.addEventListener('storage', listenStorage);
    return () => window.removeEventListener('storage', listenStorage);
  }, []);

  const handleVote = async (type: 'upvote' | 'downvote') => {
    // 1 vote per refresh strictly!
    if (voted !== null) return;

    // Optimistic UI updates
    if (type === 'upvote') {
      setUpvotes(p => p + 1);
      setVoted('up');
    } else {
      setDownvotes(d => d + 1);
      setVoted('down');
    }

    try {
      await fetch('/api/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, action: 'increment' }),
      });
    } catch (e) {
      console.error("Failed to submit interaction.");
    }
  }

  if (isLoading) {
    return <div className="h-8 w-24 border bg-background rounded-full opacity-0"></div>;
  }

  return (
    <div className="flex bg-background border px-3 py-1.5 rounded-full items-center gap-3 ring-1 ring-border/50 shadow-sm w-fit mt-3 transition-all scale-90 sm:scale-100">
      <button 
        onClick={() => handleVote('upvote')} 
        className={cn("p-1 rounded cursor-pointer transition-colors active:scale-95", voted === 'up' ? "text-orange-500 bg-orange-500/10" : "text-muted-foreground hover:bg-muted")}
        aria-label="Upvote portfolio"
      >
         <ArrowBigUp className="size-5" />
      </button>
      
      <span className="text-sm font-bold min-w-[20px] text-center select-none text-foreground">
        {upvotes}
      </span>
      
      <button 
        onClick={() => handleVote('downvote')} 
        className={cn("p-1 rounded cursor-pointer transition-colors active:scale-95", voted === 'down' ? "text-indigo-500 bg-indigo-500/10" : "text-muted-foreground hover:bg-muted")}
        aria-label="Downvote portfolio"
      >
         <ArrowBigDown className="size-5" />
      </button>

      {isAdmin && (
        <span className="text-xs text-red-500 bg-red-500/10 px-2.5 py-1 rounded-full ml-1 font-mono border border-red-500/20 font-bold tracking-tight shadow-inner flex items-center gap-1 animate-in fade-in zoom-in duration-300">
          <ArrowBigDown className="size-3" />
          {downvotes}
        </span>
      )}
    </div>
  );
}
