--
-- PostgreSQL database dump
--

-- Dumped from database version 14.13 (Ubuntu 14.13-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.13 (Ubuntu 14.13-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: egg_counts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.egg_counts (
    id integer NOT NULL,
    coop_id integer NOT NULL,
    count integer NOT NULL,
    recorded_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    average_weight double precision
);


ALTER TABLE public.egg_counts OWNER TO postgres;

--
-- Name: egg_counts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.egg_counts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.egg_counts_id_seq OWNER TO postgres;

--
-- Name: egg_counts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.egg_counts_id_seq OWNED BY public.egg_counts.id;


--
-- Name: egg_counts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.egg_counts ALTER COLUMN id SET DEFAULT nextval('public.egg_counts_id_seq'::regclass);


--
-- Data for Name: egg_counts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.egg_counts (id, coop_id, count, recorded_at, average_weight) FROM stdin;
1	1	100	2024-11-16 23:15:24.762497	\N
2	2	150	2024-11-16 23:15:24.762497	\N
3	1	60	2024-11-17 02:04:27.117034	\N
4	1	65	2024-11-17 03:28:57.887738	\N
5	1	38	2024-11-17 05:05:08.286975	\N
6	1	0	2024-11-17 05:16:47.314021	\N
7	1	93	2024-11-17 07:44:21.096112	\N
8	1	93	2024-11-17 08:10:40.77807	\N
9	1	90	2024-11-17 08:13:07.285996	\N
10	1	960	2024-11-17 08:23:33.084742	\N
11	1	90	2024-11-17 08:29:42.212685	\N
12	1	90	2024-11-17 08:35:19.343624	\N
13	1	0	2024-11-17 09:56:10.724553	\N
14	6	1170	2024-11-17 09:57:03.493289	\N
15	6	1170	2024-11-17 10:02:40.069298	\N
16	6	90	2024-11-17 10:07:44.545859	\N
17	5	180	2024-11-17 10:22:50.950806	\N
18	5	30	2024-11-17 10:44:15.936728	\N
19	5	180	2024-11-17 10:46:47.10774	\N
20	9	17700	2024-11-17 10:53:30.262907	\N
21	9	17700	2024-11-17 10:54:18.990657	\N
22	9	180	2024-11-17 10:54:34.492358	\N
23	9	180	2024-11-17 10:57:12.625013	\N
24	9	180	2024-11-17 11:01:11.640891	\N
25	9	180	2024-11-17 11:03:18.321596	\N
26	9	180	2024-11-17 11:04:46.095275	\N
27	9	180	2024-11-17 11:06:35.38525	\N
28	9	180	2024-11-17 11:07:26.484249	\N
29	5	90	2024-11-17 11:27:54.940529	\N
30	5	90	2024-11-17 11:35:01.942597	\N
31	5	90	2024-11-17 11:37:23.289725	\N
32	5	90	2024-11-17 11:37:39.167447	\N
33	5	90	2024-11-17 11:44:08.957289	\N
34	5	0	2024-11-17 11:47:48.847946	\N
35	5	60	2024-11-17 11:54:39.489144	\N
36	1	180	2024-11-17 12:19:43.836163	\N
37	8	302	2024-11-17 14:12:53.388561	\N
38	4	123	2024-11-17 14:38:18.437584	\N
39	5	123	2024-11-17 14:51:47.319758	\N
40	5	270	2024-11-24 23:10:37.394166	\N
41	4	2640	2024-11-24 23:37:52.380272	18.5
\.


--
-- Name: egg_counts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.egg_counts_id_seq', 41, true);


--
-- Name: egg_counts egg_counts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.egg_counts
    ADD CONSTRAINT egg_counts_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

